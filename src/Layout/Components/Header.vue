<template>
  <div class="app-header header-shadow">
    <div class="logo-src" />
    <div class="app-header__content">
      <div class="app-header-left">
        <SearchBox />
      </div>
      <div class="app-header-right">
        <UserArea />
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button
          type="button"
          class="hamburger close-sidebar-btn hamburger--elastic"
          :class="{ 'is-active': uiStore.mobileSidebarOpen }"
          @click="toggleMobileSidebar"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <b-button
          variant="primary"
          size="sm"
          class="btn-icon btn-icon-only"
          :class="{ active: uiStore.mobileMenuOpen }"
          @click="toggleMobileMenu"
        >
          <div class="btn-icon-wrapper">
            <font-awesome-icon icon="ellipsis-vertical" />
          </div>
        </b-button>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useUIStore } from '@/stores/ui'
import SearchBox from './Header/SearchBox.vue'
import UserArea from './Header/HeaderUserArea.vue'

export default defineComponent({
  name: 'Header',
  components: {
    SearchBox,
    UserArea
  },
  setup() {
    const uiStore = useUIStore()

    const toggleMobileSidebar = () => {
      uiStore.toggleMobileSidebar()
    }

    const toggleMobileMenu = () => {
      uiStore.toggleMobileMenu()
    }

    return {
      uiStore,
      toggleMobileSidebar,
      toggleMobileMenu
    }
  }
})
</script>
