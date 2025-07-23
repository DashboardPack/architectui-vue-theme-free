<template>
  <div class="app-footer">
    <div class="app-footer__inner">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="footer-text">Copyright © 2025 ArchitectUI Vue Free. All rights reserved.</div>
          </div>
          <div class="col-md-6">
            <div class="footer-nav">
              <div class="nav nav-footer justify-content-end">
                <!-- Quick Links Dropdown -->
                <div class="dropdown me-3">
                  <button class="btn btn-link dropdown-toggle" type="button" @click="toggleDropdown('quickLinks')">
                    Quick Links
                  </button>
                  <div class="dropdown-menu dropdown-menu-end" :class="{ show: activeDropdown === 'quickLinks' }">
                    <button class="dropdown-item" @click="handleFooterAction('about')">About</button>
                    <button class="dropdown-item" @click="handleFooterAction('contact')">Contact</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" @click="handleFooterAction('privacy')">Privacy Policy</button>
                    <button class="dropdown-item" @click="handleFooterAction('terms')">Terms of Service</button>
                  </div>
                </div>

                <!-- Social Media Dropdown -->
                <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" @click="toggleDropdown('socialMedia')">
                    Social Media
                  </button>
                  <div class="dropdown-menu dropdown-menu-end" :class="{ show: activeDropdown === 'socialMedia' }">
                    <button class="dropdown-item" @click="handleSocialAction('twitter')">
                      <font-awesome-icon :icon="['fab', 'twitter']" class="me-2 social-icon twitter-icon" />Twitter
                    </button>
                    <button class="dropdown-item" @click="handleSocialAction('facebook')">
                      <font-awesome-icon :icon="['fab', 'facebook']" class="me-2 social-icon facebook-icon" />Facebook
                    </button>
                    <button class="dropdown-item" @click="handleSocialAction('linkedin')">
                      <font-awesome-icon :icon="['fab', 'linkedin']" class="me-2 social-icon linkedin-icon" />LinkedIn
                    </button>
                    <button class="dropdown-item" @click="handleSocialAction('github')">
                      <font-awesome-icon :icon="['fab', 'github']" class="me-2 social-icon github-icon" />GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const activeDropdown = ref(null)

    const toggleDropdown = dropdownName => {
      console.log('Toggling dropdown:', dropdownName)
      if (activeDropdown.value === dropdownName) {
        activeDropdown.value = null
      } else {
        activeDropdown.value = dropdownName
      }
    }

    const closeDropdowns = () => {
      activeDropdown.value = null
    }

    const handleClickOutside = event => {
      if (!event.target.closest('.dropdown')) {
        closeDropdowns()
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    const handleFooterAction = action => {
      console.log(`Footer action clicked: ${action}`)
      closeDropdowns()

      const messages = {
        about: 'About ArchitectUI - A modern Vue 3 admin dashboard template with Bootstrap 5 integration.',
        contact: 'Contact Us - This would typically open a contact form or redirect to a contact page.',
        privacy: 'Privacy Policy - This section would contain detailed privacy policy information.',
        terms: 'Terms of Service - This section would contain the terms and conditions of use.'
      }

      const message = messages[action]
      if (message) {
        // In a real application, you would navigate to the actual page
        // For demo purposes, showing an informative message
        alert(`📄 ${message}\n\nIn a production app, this would navigate to the actual ${action} page.`)
      } else {
        console.warn('Unknown footer action:', action)
      }
    }

    const handleSocialAction = platform => {
      console.log(`Social media clicked: ${platform}`)
      closeDropdowns()

      const socialLinks = {
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }

      const url = socialLinks[platform]
      if (url) {
        console.log(`Opening ${platform} social media link:`, url)
        // Open in new tab
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        console.log('Unknown social platform:', platform)
      }
    }

    return {
      activeDropdown,
      toggleDropdown,
      handleFooterAction,
      handleSocialAction
    }
  }
})
</script>

<style scoped>
/* OVERRIDE GLOBAL SCSS - Force correct positioning */
.app-footer :deep(.dropdown) {
  position: relative !important;
}

.app-footer :deep(.dropdown-menu) {
  position: absolute !important;
  top: auto !important;
  bottom: 100% !important;
  left: auto !important;
  right: 0 !important;
  transform: none !important;
  margin-top: 0 !important;
  margin-bottom: 8px !important;
  z-index: 1050 !important;
  min-width: 180px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.375rem;
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: none;
}

.app-footer :deep(.dropdown-menu.show) {
  display: block !important;
  animation: footerDropdownFadeIn 0.15s ease-out;
}

@keyframes footerDropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure dropdown items are properly styled */
.app-footer :deep(.dropdown-item) {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #212529;
  text-decoration: none;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
}

.app-footer :deep(.dropdown-item:hover),
.app-footer :deep(.dropdown-item:focus) {
  background-color: #f8f9fa;
  color: #69aa8a;
}

.app-footer :deep(.dropdown-divider) {
  margin: 0.5rem 0;
  border-top: 1px solid #e9ecef;
}

/* Button styling */
.app-footer :deep(.btn-link) {
  color: #6c757d;
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border: none;
  background: none;
}

.app-footer :deep(.btn-link:hover) {
  color: #69aa8a;
}

.app-footer :deep(.btn-link::after) {
  display: none; /* Hide Bootstrap caret */
}

/* Social media icon colors */
.social-icon {
  width: 16px;
  font-size: 14px;
}

.twitter-icon {
  color: #1da1f2;
}

.facebook-icon {
  color: #1877f2;
}

.linkedin-icon {
  color: #0a66c2;
}

.github-icon {
  color: #333;
}

/* Icons inherit color on hover */
:deep(.dropdown-item:hover) .social-icon {
  color: inherit;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .app-footer :deep(.dropdown-menu) {
    right: auto !important;
    left: 0 !important;
    min-width: 160px;
  }
}
</style>
