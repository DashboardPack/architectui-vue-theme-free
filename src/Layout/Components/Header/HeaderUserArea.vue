<template>
  <div class="header-user-area d-flex align-items-center">
    <div class="header-btn-lg d-flex align-items-center">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper d-flex align-items-center">
          <!-- User Avatar and Dropdown -->
          <div class="widget-content-left">
            <b-dropdown variant="link" no-caret right class="p-0 border-0 bg-transparent" menu-class="dropdown-menu-lg">
              <template #button-content>
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                  <img
                    width="42"
                    height="42"
                    class="rounded-circle"
                    src="@/assets/images/avatars/1.jpg"
                    alt="User Avatar"
                  />
                </div>
              </template>

              <b-dropdown-header>User Menu</b-dropdown-header>
              <b-dropdown-item @click="handleMenuAction('profile')">Profile</b-dropdown-item>
              <b-dropdown-item @click="handleMenuAction('settings')">Settings</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="handleMenuAction('logout')">Logout</b-dropdown-item>
            </b-dropdown>
          </div>

          <!-- User Info -->
          <div class="widget-content-left ms-3 header-user-info">
            <div class="widget-heading">{{ user.name }}</div>
            <div class="widget-subheading">{{ user.role }}</div>
          </div>

          <!-- Calendar Button -->
          <div class="widget-content-right ms-3">
            <b-button
              id="calendar-btn"
              variant="info"
              size="sm"
              class="btn-shadow d-flex align-items-center justify-content-center"
              style="width: 32px; height: 32px"
              @click="handleCalendarClick"
              :title="'Calendar Events'"
            >
              <font-awesome-icon icon="calendar-alt" />
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
      console.log('Calendar clicked')
    }

    const handleMenuAction = action => {
      console.log('User menu action:', action)

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
