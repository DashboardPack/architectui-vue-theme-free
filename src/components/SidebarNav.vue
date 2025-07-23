<template>
  <div class="app-sidebar sidebar-shadow" @mouseenter="onSidebarHover(true)" @mouseleave="onSidebarHover(false)">
    <div class="app-header__logo">
      <div class="logo-src" />
      <div class="sidebar-header-controls">
        <button
          type="button"
          class="hamburger close-sidebar-btn hamburger--elastic"
          :class="{ 'is-active': sidebarStore.isCollapsed }"
          @click="sidebarStore.toggleCollapse"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>

    <div class="app-sidebar-content">
      <div class="app-sidebar-scroll">
        <div class="v-sidebar-menu">
          <SidebarMenuItem v-for="item in sidebarStore.menuItems" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import SidebarMenuItem from './SidebarMenuItem.vue'

const route = useRoute()
const sidebarStore = useSidebarStore()

// Window resize handler
const handleResize = () => {
  sidebarStore.updateWindowWidth(window.innerWidth)
}

// Initialize sidebar when component mounts
onMounted(() => {
  // Initialize sidebar with current route
  sidebarStore.initializeSidebar(route.path)

  // Add window resize listener
  window.addEventListener('resize', handleResize)
})

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Watch for route changes to update active submenu
watch(
  () => route.path,
  newPath => {
    sidebarStore.updateActiveSubmenuFromRoute(newPath)
  }
)

// Handle sidebar hover for collapsed state
const onSidebarHover = isHovering => {
  if (sidebarStore.isCollapsed) {
    const body = document.body
    if (isHovering) {
      body.classList.add('closed-sidebar-open')
    } else {
      body.classList.remove('closed-sidebar-open')
    }
  }
}
</script>

<style>
/* Hide hamburger when collapsed to reduce busy design */
.closed-sidebar .app-sidebar .hamburger {
  display: none;
}

/* Show hamburger only when collapsed sidebar is hovered */
.closed-sidebar .app-sidebar:hover .hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure hamburger is properly centered in collapsed hover state */
.closed-sidebar .app-sidebar:hover .sidebar-header-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<style scoped>
/* Use the black logo image directly */
.app-sidebar .app-header__logo .logo-src {
  background-image: url('@/assets/images/logo-inverse.png') !important;
}

/* Ensure hamburger button styling is consistent */
.hamburger {
  padding: 4px;
  width: 32px;
  height: 32px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  border-radius: 4px;
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger.is-active:hover {
  opacity: 0.7;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000;
}

.hamburger-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 20px;
  height: 2px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}

.hamburger-inner::before {
  top: -5px;
}

.hamburger-inner::after {
  bottom: -5px;
}

/* Elastic animation */
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic .hamburger-inner::before {
  top: 6px;
  transition: opacity 0.125s 0.275s ease;
}

.hamburger--elastic .hamburger-inner::after {
  top: 12px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 6px, 0) rotate(135deg);
  transition-delay: 0.075s;
}

.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0;
}

.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -12px, 0) rotate(-270deg);
  transition-delay: 0.075s;
}

/* Header area layout - ensure proper spacing */
.app-header__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.7rem;
  height: 60px;
  width: 280px;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.2s;
  flex-shrink: 0;
}

/* Header controls positioning */
.sidebar-header-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}
</style>
