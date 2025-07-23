<template>
  <div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
      <div class="logo-src" />
      <div class="sidebar-header-controls">
        <button
          type="button"
          class="hamburger close-sidebar-btn hamburger--elastic"
          :class="{ 'is-active': isOpen }"
          @click="toggleBodyClass('closed-sidebar')"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-sidebar-content">
      <div class="app-sidebar-scroll">
        <div class="sidebar-menu">
          <!-- Main Navigation -->
          <div class="menu-header">Main Navigation</div>

          <router-link to="/" class="menu-link">
            <div class="menu-link-content">
              <i class="metismenu-icon pe-7s-rocket"></i>
              <span class="menu-text">Analytics Dashboard</span>
            </div>
          </router-link>

          <router-link to="/dashboards/analytics-enhanced" class="menu-link">
            <div class="menu-link-content">
              <i class="metismenu-icon pe-7s-graph3"></i>
              <span class="menu-text">Enhanced Dashboard</span>
              <span class="badge bg-success ms-auto">NEW</span>
            </div>
          </router-link>

          <!-- User Pages Section -->
          <div class="menu-header">User Pages</div>

          <div class="menu-item" :class="{ 'parent-active-item': isSubmenuActive('pages') }">
            <div class="menu-link" @click="toggleSubmenu('pages')" :class="{ active: isSubmenuActive('pages') }">
              <div class="menu-link-content">
                <i class="metismenu-icon pe-7s-user"></i>
                <span class="menu-text">Pages</span>
              </div>
              <i class="metismenu-state-icon pe-7s-angle-down" :class="{ 'rotate-minus-90': !submenus.pages }"></i>
            </div>
            <div class="menu-submenu" v-show="submenus.pages">
              <router-link to="/pages/login-boxed" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Login
              </router-link>
              <router-link to="/pages/register-boxed" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Register
              </router-link>
              <router-link to="/pages/forgot-password-boxed" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Forgot Password
              </router-link>
            </div>
          </div>

          <!-- UI Elements Section -->
          <div class="menu-header">UI Elements</div>

          <div class="menu-item" :class="{ 'parent-active-item': isSubmenuActive('elements') }">
            <div class="menu-link" @click="toggleSubmenu('elements')" :class="{ active: isSubmenuActive('elements') }">
              <div class="menu-link-content">
                <i class="metismenu-icon pe-7s-diamond"></i>
                <span class="menu-text">Elements</span>
              </div>
              <i class="metismenu-state-icon pe-7s-angle-down" :class="{ 'rotate-minus-90': !submenus.elements }"></i>
            </div>
            <div class="menu-submenu" v-show="submenus.elements">
              <router-link to="/elements/buttons-standard" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Buttons
              </router-link>
              <router-link to="/elements/dropdowns" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Dropdowns
              </router-link>
              <router-link to="/elements/icons" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Icons
              </router-link>
              <router-link to="/elements/badges-labels" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Badges
              </router-link>
              <router-link to="/elements/cards" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Cards
              </router-link>
              <router-link to="/elements/list-group" class="menu-sublink">
                <i class="metismenu-icon"></i>
                List Groups
              </router-link>
              <router-link to="/elements/timelines" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Timeline
              </router-link>
              <router-link to="/elements/utilities" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Utilities
              </router-link>
            </div>
          </div>

          <div class="menu-item" :class="{ 'parent-active-item': isSubmenuActive('components') }">
            <div
              class="menu-link"
              @click="toggleSubmenu('components')"
              :class="{ active: isSubmenuActive('components') }"
            >
              <div class="menu-link-content">
                <i class="metismenu-icon pe-7s-plugin"></i>
                <span class="menu-text">Components</span>
              </div>
              <i class="metismenu-state-icon pe-7s-angle-down" :class="{ 'rotate-minus-90': !submenus.components }"></i>
            </div>
            <div class="menu-submenu" v-show="submenus.components">
              <router-link to="/components/tabs" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Tabs
              </router-link>
              <router-link to="/components/accordions" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Accordions
              </router-link>
              <router-link to="/components/modals" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Modals
              </router-link>
              <router-link to="/components/progress-bar" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Progress Bar
              </router-link>
              <router-link to="/components/tooltips-popovers" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Tooltips & Popovers
              </router-link>
              <router-link to="/components/carousel" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Carousel
              </router-link>
              <router-link to="/components/pagination" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Pagination
              </router-link>
              <router-link to="/components/maps" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Maps
              </router-link>
            </div>
          </div>

          <!-- Tables & Widgets Section -->
          <div class="menu-header">Tables & Widgets</div>

          <router-link to="/tables/regular-tables" class="menu-link">
            <div class="menu-link-content">
              <i class="metismenu-icon pe-7s-display1"></i>
              <span class="menu-text">Regular Tables</span>
            </div>
          </router-link>

          <router-link to="/widgets/chart-boxes-3" class="menu-link">
            <div class="menu-link-content">
              <i class="metismenu-icon pe-7s-graph1"></i>
              <span class="menu-text">Chart Boxes</span>
            </div>
          </router-link>

          <!-- Forms & Charts Section -->
          <div class="menu-header">Forms & Charts</div>

          <div class="menu-item" :class="{ 'parent-active-item': isSubmenuActive('forms') }">
            <div class="menu-link" @click="toggleSubmenu('forms')" :class="{ active: isSubmenuActive('forms') }">
              <div class="menu-link-content">
                <i class="metismenu-icon pe-7s-note"></i>
                <span class="menu-text">Forms</span>
              </div>
              <i class="metismenu-state-icon pe-7s-angle-down" :class="{ 'rotate-minus-90': !submenus.forms }"></i>
            </div>
            <div class="menu-submenu" v-show="submenus.forms">
              <router-link to="/forms/controls" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Form Controls
              </router-link>
              <router-link to="/forms/layouts" class="menu-sublink">
                <i class="metismenu-icon"></i>
                Form Layouts
              </router-link>
            </div>
          </div>

          <router-link to="/charts/chartjs" class="menu-link">
            <div class="menu-link-content">
              <i class="metismenu-icon pe-7s-graph"></i>
              <span class="menu-text">Chart.js</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false,
      windowWidth: 0,
      submenus: {
        pages: false,
        elements: false,
        components: false,
        forms: false
      }
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    isSubmenuActive() {
      return submenuName => {
        const routeMap = {
          pages: '/pages/',
          elements: '/elements/',
          components: '/components/',
          forms: '/forms/'
        }
        return this.currentPath.startsWith(routeMap[submenuName])
      }
    }
  },
  props: {
    sidebarbg: String
  },
  methods: {
    toggleSubmenu(submenuName) {
      this.submenus[submenuName] = !this.submenus[submenuName]
    },
    toggleBodyClass(className) {
      const el = document.body
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        el.classList.add(className)
        // Close all submenus when sidebar is collapsed
        Object.keys(this.submenus).forEach(key => {
          this.submenus[key] = false
        })
      } else {
        el.classList.remove(className)
        // Auto-open submenu containing current page when expanded
        this.openActiveSubmenu()
      }
    },
    getWindowWidth() {
      const el = document.body

      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth < '1350') {
        el.classList.add('closed-sidebar', 'closed-sidebar-md')
      } else {
        el.classList.remove('closed-sidebar', 'closed-sidebar-md')
      }
    },
    openActiveSubmenu() {
      const currentPath = this.$route.path

      // Reset all submenus first
      Object.keys(this.submenus).forEach(key => {
        this.submenus[key] = false
      })

      // Define route mappings to submenus
      const routeToSubmenu = {
        '/pages/': 'pages',
        '/elements/': 'elements',
        '/components/': 'components',
        '/forms/': 'forms'
      }

      // Check which submenu should be open based on current route
      Object.entries(routeToSubmenu).forEach(([pathPrefix, submenuKey]) => {
        if (currentPath.startsWith(pathPrefix)) {
          this.submenus[submenuKey] = true
        }
      })
    },
    initializeActiveStates() {
      // Always determine which submenu should be open based on current route
      this.openActiveSubmenu()

      // Set isOpen state based on whether sidebar is closed
      const el = document.body
      this.isOpen = el.classList.contains('closed-sidebar')
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
      this.initializeActiveStates()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  watch: {
    $route() {
      // Update active submenu when route changes
      this.initializeActiveStates()
    }
  }
}
</script>

<style scoped>
/* Original ArchitectUI sidebar styling */
.sidebar-menu {
  padding: 0 1.5rem 1.5rem;
  width: 100%;
}

.menu-header {
  text-transform: uppercase;
  font-size: 0.75rem;
  margin: 1.5rem 0 0.75rem 0;
  font-weight: bold;
  color: #69aa8a;
  white-space: nowrap;
  position: relative;
}

.menu-header:first-child {
  margin-top: 0;
}

.menu-item {
  position: relative;
  display: block;
  padding: 0.1rem 0;
}

.menu-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2.4rem;
  height: 2.4rem;
  padding: 0 0.75rem 0 45px;
  position: relative;
  border-radius: 0.25rem;
  color: #6c757d;
  white-space: nowrap;
  transition: all 0.2s;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}

.menu-link:hover {
  background: #f8f9fa;
  color: #69aa8a;
}

.menu-link-content {
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
}

.menu-link i.metismenu-icon {
  text-align: center;
  width: 34px;
  height: 34px;
  line-height: 34px;
  position: absolute;
  left: -35px;
  top: 50%;
  margin-top: -17px;
  font-size: 1.5rem;
  opacity: 0.3;
  transition: color 300ms;
}

.menu-text {
  white-space: nowrap;
  position: relative;
}

.metismenu-state-icon {
  text-align: center;
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 0.875rem;
  opacity: 0.5;
  transition: all 300ms;
  transform: rotate(-90deg);
  flex-shrink: 0;
  margin-left: auto;
  pointer-events: none;
}

.metismenu-state-icon.rotate-minus-90 {
  transform: rotate(0deg);
}

.menu-submenu {
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
}

.menu-submenu::before {
  content: '';
  height: 100%;
  opacity: 1;
  width: 3px;
  background: #f8f9fa;
  position: absolute;
  left: 20px;
  top: 0;
  border-radius: 15px;
}

.menu-sublink {
  display: block;
  padding: 0 1rem;
  height: 2.1rem;
  line-height: 2.1rem;
  color: #6c757d;
  text-decoration: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  transition: all 0.2s;
  margin-left: 1.5rem;
}

.menu-sublink:hover {
  background: #f8f9fa;
  color: #69aa8a;
}

.menu-sublink.router-link-active {
  background: #f8f9fa;
  color: #69aa8a;
  font-weight: 600;
}

.menu-link.router-link-active {
  background: #f8f9fa;
  color: #69aa8a;
  font-weight: 600;
}

.menu-item.active-item > .menu-link {
  font-weight: 600;
  background: #f8f9fa;
  color: #69aa8a;
}

.menu-item.parent-active-item > .menu-link,
.menu-item.open-item > .menu-link {
  font-weight: 600;
  color: #69aa8a;
  background: #f8f9fa;
}

.menu-link.active {
  background: #f8f9fa !important;
  color: #69aa8a !important;
  font-weight: 600;
}

.menu-link.active .metismenu-state-icon {
  opacity: 1;
  color: #69aa8a;
}

/* Hamburger menu styles */
.hamburger {
  padding: 4px;
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

.closed-sidebar .hamburger-box {
  width: 18px;
  height: 18px;
}

.closed-sidebar .app-sidebar:hover .hamburger-box {
  width: 20px;
  height: 20px;
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

.closed-sidebar .hamburger-inner,
.closed-sidebar .hamburger-inner::before,
.closed-sidebar .hamburger-inner::after {
  width: 18px;
  height: 2px;
}

.closed-sidebar .app-sidebar:hover .hamburger-inner,
.closed-sidebar .app-sidebar:hover .hamburger-inner::before,
.closed-sidebar .app-sidebar:hover .hamburger-inner::after {
  width: 20px;
  height: 2px;
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

.closed-sidebar .hamburger-inner::before {
  top: -4px;
}

.closed-sidebar .hamburger-inner::after {
  bottom: -4px;
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

/* Collapsed sidebar behavior - icon only mode */
.closed-sidebar .app-sidebar {
  width: 80px;
  min-width: 80px;
  overflow: visible;
  z-index: 1000;
}

.closed-sidebar .app-sidebar-content {
  width: 80px;
  overflow: visible;
}

.closed-sidebar .menu-header {
  display: none;
}

.closed-sidebar .menu-text {
  opacity: 0;
  visibility: hidden;
  transform: translateX(-20px);
  transition: all 0.2s ease;
}

.closed-sidebar .metismenu-state-icon {
  opacity: 0;
  visibility: hidden;
}

.closed-sidebar .menu-submenu {
  display: none;
}

.closed-sidebar .menu-link {
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
}

.closed-sidebar .menu-item {
  display: flex;
  justify-content: center;
  margin: 0.3rem 0;
  padding: 0;
}

.closed-sidebar .menu-link i.metismenu-icon {
  position: relative;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0.6;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.closed-sidebar .menu-link.router-link-active {
  background: #69aa8a;
  color: white;
  border-radius: 8px;
}

.closed-sidebar .menu-link.router-link-active i.metismenu-icon {
  opacity: 1;
  color: white;
}

.closed-sidebar .sidebar-menu {
  padding: 0 0.5rem 1.5rem;
}

/* Hover expansion - only on sidebar itself */
.closed-sidebar .app-sidebar:hover {
  width: 280px;
  min-width: 280px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.closed-sidebar .app-sidebar:hover .app-sidebar-content {
  width: 280px;
  transition: all 0.3s ease;
}

.closed-sidebar .app-sidebar:hover .menu-header {
  display: block;
  animation: fadeInSlide 0.3s ease forwards;
}

.closed-sidebar .app-sidebar:hover .menu-text {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: all 0.3s ease 0.1s;
}

.closed-sidebar .app-sidebar:hover .metismenu-state-icon {
  opacity: 0.5;
  visibility: visible;
  transition: all 0.3s ease 0.1s;
}

.closed-sidebar .app-sidebar:hover .menu-submenu {
  display: block;
}

.closed-sidebar .app-sidebar:hover .menu-link {
  padding: 0 0.75rem 0 45px;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  border-radius: 0.25rem;
  height: 2.4rem;
  line-height: 2.4rem;
}

.closed-sidebar .app-sidebar:hover .menu-item {
  display: block;
  margin: 0;
  padding: 0.1rem 0;
}

.closed-sidebar .app-sidebar:hover .menu-link i.metismenu-icon {
  position: absolute;
  left: -35px;
  top: 50%;
  margin-top: -17px;
  opacity: 0.3;
  font-size: 1.5rem;
}

.closed-sidebar .app-sidebar:hover .sidebar-menu {
  padding: 0 1.5rem 1.5rem;
}

/* Reset logo area positioning when hovered */
.closed-sidebar .app-sidebar:hover .app-header__logo {
  justify-content: space-between;
}

.closed-sidebar .app-sidebar:hover .sidebar-header-controls {
  position: relative;
  right: auto;
  top: auto;
  transform: none;
}

/* Reset active state styling when sidebar is expanded */
.closed-sidebar .app-sidebar:hover .menu-link.router-link-active {
  background: #f8f9fa;
  color: #69aa8a;
  font-weight: 600;
  border-radius: 0.25rem;
}

.closed-sidebar .app-sidebar:hover .menu-link.router-link-active i.metismenu-icon {
  opacity: 0.3;
  color: inherit;
}

/* Animation for smooth text appearance */
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Smooth transitions for all elements */
.app-sidebar {
  transition: all 0.3s ease;
}

.app-sidebar-content {
  transition: all 0.3s ease;
}

.menu-text {
  transition: all 0.3s ease;
}

.metismenu-state-icon {
  transition: all 0.3s ease;
}

.menu-link {
  transition: all 0.3s ease;
}

.menu-link i.metismenu-icon {
  transition: all 0.3s ease;
}

/* Ensure menu items don't overflow when collapsed */
.closed-sidebar .menu-item {
  overflow: hidden;
}

/* Better hover effect for collapsed icons - no zoom effect */
.closed-sidebar .menu-link:hover:not(.router-link-active) {
  background: #f8f9fa;
}

.closed-sidebar .menu-link:hover:not(.router-link-active) i.metismenu-icon {
  opacity: 1;
  color: #69aa8a;
}

/* Ensure consistent hover behavior when sidebar is expanded */
.closed-sidebar .app-sidebar:hover .menu-link:hover:not(.router-link-active) {
  background: #f8f9fa;
  color: #69aa8a;
}

/* Sidebar header controls styling */
.sidebar-header-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

/* Ensure controls stay in logo area */
.app-header__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  position: relative;
}

/* Position close button on the right side of the logo area */
.closed-sidebar .app-header__logo {
  justify-content: flex-start;
}

.closed-sidebar .sidebar-header-controls {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

/* Keep hamburger menu in consistent position */
.hamburger {
  padding: 4px;
  width: 32px;
  height: 32px;
}

/* Hide hamburger button when collapsed */
.closed-sidebar .hamburger {
  display: none;
}

/* Show hamburger button only when collapsed sidebar is hovered */
.closed-sidebar .app-sidebar:hover .hamburger {
  display: block;
}

/* Logo responsive behavior */
.closed-sidebar .logo-src {
  width: 20px;
  margin: 0;
}

.closed-sidebar .app-sidebar:hover .logo-src {
  width: 97px;
}

/* Ensure controls are properly positioned */
.closed-sidebar .sidebar-header-controls {
  display: flex;
  gap: 0.25rem;
}

/* Restore normal sizing on hover */
.closed-sidebar .app-sidebar:hover .sidebar-header-controls {
  gap: 0.5rem;
}

.closed-sidebar .app-sidebar:hover .hamburger {
  width: 32px;
  height: 32px;
}

/* Logo area styling */
.closed-sidebar .app-header__logo {
  padding: 0 0.5rem;
}

.closed-sidebar .app-sidebar:hover .app-header__logo {
  padding: 0 1rem;
}

/* Sidebar responsive behavior */
@media (max-width: 1350px) {
  .app-sidebar-content {
    opacity: 1;
    visibility: visible;
    transition: all 0.35s ease;
  }

  .closed-sidebar .app-sidebar-content {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
  }

  .closed-sidebar .app-sidebar:hover .app-sidebar-content {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
}

/* Ensure proper arrow positioning in submenu items */
.menu-link-content {
  flex: 1;
  min-width: 0;
}

/* Active submenu indicator */
.menu-sublink.router-link-active::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background: #69aa8a;
  border-radius: 50%;
}
</style>
