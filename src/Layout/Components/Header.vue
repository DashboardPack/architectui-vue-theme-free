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
          :class="{ 'is-active': isOpen }"
          @click="toggleMobile('closed-sidebar-open')"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <button
          class="btn btn-primary btn-sm btn-icon btn-icon-only"
          :class="{ active: isOpenMobileMenu }"
          @click="toggleMobile2('header-menu-open')"
        >
          <div class="btn-icon-wrapper">
            <font-awesome-icon icon="ellipsis-vertical" />
          </div>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import SearchBox from './Header/SearchBox.vue'
import UserArea from './Header/HeaderUserArea.vue'

export default {
  name: 'Header',
  components: {
    SearchBox,
    UserArea
  },
  data() {
    return {
      mobileSidebarOpen: false,
      mobileMenuOpen: false
    }
  },
  computed: {
    isOpen() {
      return this.mobileSidebarOpen
    },
    isOpenMobileMenu() {
      return this.mobileMenuOpen
    }
  },
  methods: {
    toggleMobile() {
      this.mobileSidebarOpen = !this.mobileSidebarOpen
      const body = document.body
      if (this.mobileSidebarOpen) {
        body.classList.add('closed-sidebar-open')
      } else {
        body.classList.remove('closed-sidebar-open')
      }
    },
    toggleMobile2() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      const body = document.body
      if (this.mobileMenuOpen) {
        body.classList.add('header-menu-open')
      } else {
        body.classList.remove('header-menu-open')
      }
    }
  }
}
</script>
