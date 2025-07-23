<template>
  <div class="header-user-area d-flex align-items-center">
    <div class="header-btn-lg d-flex align-items-center">
      <div class="widget-content p-0">
        <div class="d-flex align-items-center">
          <!-- Combined Profile Section - No Container Gaps -->
          <div class="d-flex align-items-center profile-section">
            <!-- User Avatar and Dropdown -->
            <b-dropdown
              variant="link"
              no-caret
              right
              class="p-0 border-0 bg-transparent profile-dropdown"
              menu-class="dropdown-menu-lg"
            >
              <template #button-content>
                <div class="d-flex align-items-center">
                  <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <img
                      width="42"
                      height="42"
                      class="rounded-circle"
                      src="@/assets/images/avatars/1.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <!-- Simple dropdown chevron -->
                  <span class="dropdown-chevron">
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                  </span>
                </div>
              </template>

              <b-dropdown-header>User Menu</b-dropdown-header>
              <b-dropdown-item @click="handleMenuAction('profile')">Profile</b-dropdown-item>
              <b-dropdown-item @click="handleMenuAction('settings')">Settings</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="handleMenuAction('logout')">Logout</b-dropdown-item>
            </b-dropdown>

            <!-- User Info - Direct in same flex container -->
            <div class="header-user-info">
              <div class="widget-heading">{{ user.name }}</div>
              <div class="widget-subheading">{{ user.role }}</div>
            </div>
          </div>

          <!-- Calendar Button -->
          <div class="widget-content-right" style="margin-left: 24px">
            <b-button
              id="calendar-btn"
              variant="info"
              size="sm"
              class="btn-shadow d-flex align-items-center justify-content-center position-relative"
              style="width: 32px; height: 32px"
              @click="handleCalendarClick"
            >
              <font-awesome-icon icon="calendar-alt" />
              <b-tooltip target="calendar-btn" placement="bottom"> View Calendar Events </b-tooltip>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderUserArea',
  setup() {
    const user = ref({
      name: 'Alina Mclourd',
      role: 'VP People Manager',
      avatar: '@/assets/images/avatars/1.jpg'
    })

    const handleCalendarClick = () => {
      // Handle calendar functionality
    }

    const handleMenuAction = action => {
      // Handle user menu actions

      switch (action) {
      case 'profile':
        // Navigate to profile
        break
      case 'settings':
        // Navigate to settings
        break
      case 'logout':
        // Handle logout
        break
      }
    }

    return {
      user,
      handleCalendarClick,
      handleMenuAction
    }
  }
})
</script>

<style scoped>
/* Profile section - eliminate all gaps and padding */
.profile-section {
  gap: 4px;
}

.profile-dropdown {
  margin: 0 !important;
  padding: 0 !important;
}

/* Hide Bootstrap's default dropdown chevron */
.profile-dropdown .dropdown-toggle::after {
  display: none !important;
}

.header-user-info {
  margin: 0 !important;
  padding: 0 !important;
}

/* Clean dropdown chevron styling */
.dropdown-chevron {
  color: #6c757d;
  font-size: 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-left: 4px;
}

.dropdown-chevron svg {
  width: 12px;
  height: 12px;
}

/* Hover effect for the entire dropdown button */
.dropdown:hover .dropdown-chevron,
.btn-group:hover .dropdown-chevron {
  color: #495057;
  transform: translateY(1px);
}

/* Ensure smooth transitions */
.dropdown-chevron {
  transition: all 0.15s ease-in-out;
}

/* Remove any inherited spacing from widget classes */
.widget-heading,
.widget-subheading {
  margin: 0;
  padding: 0;
  line-height: 1.2;
}
</style>
