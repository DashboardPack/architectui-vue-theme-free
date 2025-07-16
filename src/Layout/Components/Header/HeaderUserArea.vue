<template>
  <div class="d-flex">
    <div class="header-btn-lg pe-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left">
            <b-dropdown variant="link" class="p-0 me-2" menu-class="dropdown-menu-lg" right>
              <template #button-content>
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                  <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="" />
                </div>
              </template>
              <b-dropdown-item-button>Menus</b-dropdown-item-button>
              <b-dropdown-item-button>Settings</b-dropdown-item-button>
              <b-dropdown-header>Header</b-dropdown-header>
              <b-dropdown-item-button>Actions</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Dividers</b-dropdown-item-button>
            </b-dropdown>
          </div>
          <div class="widget-content-left ms-3 header-user-info">
            <div class="widget-heading">{{ user.name }}</div>
            <div class="widget-subheading">{{ user.role }}</div>
          </div>
          <div class="widget-content-right header-user-info ms-3">
            <b-tooltip target="calendar-btn" placement="bottom"> Calendar Events </b-tooltip>
            <button id="calendar-btn" class="btn btn-info btn-sm btn-shadow p-1" @click="handleCalendarClick">
              <font-awesome-icon icon="calendar-alt" class="me-1 ms-1" />
            </button>
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
    // User data - in a real app, this would come from a user store
    const user = ref({
      name: 'Alina Mclourd',
      role: 'VP People Manager',
      avatar: '@/assets/images/avatars/1.jpg'
    })

    const handleCalendarClick = () => {
      // In a real app, this would open calendar functionality
      console.log('Calendar clicked')
    }

    const handleMenuAction = action => {
      // Handle user menu actions
      console.log('User menu action:', action)
    }

    return {
      user,
      handleCalendarClick,
      handleMenuAction
    }
  }
})
</script>
