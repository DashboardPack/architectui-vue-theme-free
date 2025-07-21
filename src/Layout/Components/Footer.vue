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
                <b-dropdown variant="link" right text="Quick Links" class="footer-dropdown">
                  <b-dropdown-item @click="handleFooterAction('about')">About</b-dropdown-item>
                  <b-dropdown-item @click="handleFooterAction('contact')">Contact</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="handleFooterAction('privacy')">Privacy Policy</b-dropdown-item>
                  <b-dropdown-item @click="handleFooterAction('terms')">Terms of Service</b-dropdown-item>
                </b-dropdown>

                <b-dropdown variant="link" right text="Social Media" class="footer-dropdown ms-3">
                  <b-dropdown-item @click="handleSocialAction('twitter')">Twitter</b-dropdown-item>
                  <b-dropdown-item @click="handleSocialAction('facebook')">Facebook</b-dropdown-item>
                  <b-dropdown-item @click="handleSocialAction('linkedin')">LinkedIn</b-dropdown-item>
                  <b-dropdown-item @click="handleSocialAction('github')">GitHub</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const handleFooterAction = action => {
      console.log('Footer action:', action)
      // Handle navigation or action based on the action parameter
    }

    const handleSocialAction = platform => {
      console.log('Social action:', platform)
      // Handle social media links or actions
    }

    return {
      handleFooterAction,
      handleSocialAction
    }
  }
})
</script>
