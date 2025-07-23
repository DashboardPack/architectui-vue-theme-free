import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  // State
  const isCollapsed = ref(false)
  const isMobile = ref(false)
  const activeSubmenus = ref(new Set())
  const windowWidth = ref(0)

  // Menu structure
  const menuItems = ref([
    {
      id: 'main',
      type: 'header',
      title: 'Main Navigation'
    },
    {
      id: 'dashboard',
      type: 'link',
      title: 'Analytics Dashboard',
      icon: 'pe-7s-rocket',
      route: '/'
    },
    {
      id: 'user-pages',
      type: 'header',
      title: 'User Pages'
    },
    {
      id: 'pages',
      type: 'submenu',
      title: 'Pages',
      icon: 'pe-7s-user',
      children: [
        {
          id: 'login',
          title: 'Login',
          route: '/pages/login-boxed'
        },
        {
          id: 'register',
          title: 'Register',
          route: '/pages/register-boxed'
        },
        {
          id: 'forgot-password',
          title: 'Forgot Password',
          route: '/pages/forgot-password-boxed'
        }
      ]
    },
    {
      id: 'ui-elements',
      type: 'header',
      title: 'UI Elements'
    },
    {
      id: 'elements',
      type: 'submenu',
      title: 'Elements',
      icon: 'pe-7s-diamond',
      children: [
        {
          id: 'buttons',
          title: 'Buttons',
          route: '/elements/buttons-standard'
        },
        {
          id: 'dropdowns',
          title: 'Dropdowns',
          route: '/elements/dropdowns'
        },
        {
          id: 'icons',
          title: 'Icons',
          route: '/elements/icons'
        },
        {
          id: 'badges',
          title: 'Badges',
          route: '/elements/badges-labels'
        },
        {
          id: 'cards',
          title: 'Cards',
          route: '/elements/cards'
        },
        {
          id: 'list-groups',
          title: 'List Groups',
          route: '/elements/list-group'
        },
        {
          id: 'timeline',
          title: 'Timeline',
          route: '/elements/timelines'
        },
        {
          id: 'utilities',
          title: 'Utilities',
          route: '/elements/utilities'
        }
      ]
    },
    {
      id: 'components',
      type: 'submenu',
      title: 'Components',
      icon: 'pe-7s-plugin',
      children: [
        {
          id: 'tabs',
          title: 'Tabs',
          route: '/components/tabs'
        },
        {
          id: 'accordions',
          title: 'Accordions',
          route: '/components/accordions'
        },
        {
          id: 'modals',
          title: 'Modals',
          route: '/components/modals'
        },
        {
          id: 'progress-bar',
          title: 'Progress Bar',
          route: '/components/progress-bar'
        },
        {
          id: 'tooltips-popovers',
          title: 'Tooltips & Popovers',
          route: '/components/tooltips-popovers'
        },
        {
          id: 'carousel',
          title: 'Carousel',
          route: '/components/carousel'
        },
        {
          id: 'pagination',
          title: 'Pagination',
          route: '/components/pagination'
        },
        {
          id: 'maps',
          title: 'Maps',
          route: '/components/maps'
        }
      ]
    },
    {
      id: 'tables-widgets',
      type: 'header',
      title: 'Tables & Widgets'
    },
    {
      id: 'tables',
      type: 'link',
      title: 'Regular Tables',
      icon: 'pe-7s-display1',
      route: '/tables/regular-tables'
    },
    {
      id: 'chart-boxes',
      type: 'link',
      title: 'Chart Boxes',
      icon: 'pe-7s-graph1',
      route: '/widgets/chart-boxes-3'
    },
    {
      id: 'forms-charts',
      type: 'header',
      title: 'Forms & Charts'
    },
    {
      id: 'forms',
      type: 'submenu',
      title: 'Forms',
      icon: 'pe-7s-note',
      children: [
        {
          id: 'form-controls',
          title: 'Form Controls',
          route: '/forms/controls'
        },
        {
          id: 'form-layouts',
          title: 'Form Layouts',
          route: '/forms/layouts'
        }
      ]
    },
    {
      id: 'charts',
      type: 'link',
      title: 'Chart.js',
      icon: 'pe-7s-graph',
      route: '/charts/chartjs'
    }
  ])

  // Computed properties
  const mobileBreakpoint = computed(() => 1350)

  const shouldAutoCollapse = computed(() => {
    return windowWidth.value < mobileBreakpoint.value
  })

  // Actions
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
    updateBodyClasses()

    // Close all submenus when collapsing
    if (isCollapsed.value) {
      activeSubmenus.value.clear()
    }
  }

  const setCollapsed = collapsed => {
    isCollapsed.value = collapsed
    updateBodyClasses()
  }

  const updateWindowWidth = width => {
    windowWidth.value = width
    isMobile.value = width < mobileBreakpoint.value

    // Auto-collapse on mobile
    if (shouldAutoCollapse.value) {
      setCollapsed(true)
    }
  }

  const toggleSubmenu = submenuId => {
    if (activeSubmenus.value.has(submenuId)) {
      activeSubmenus.value.delete(submenuId)
    } else {
      activeSubmenus.value.add(submenuId)
    }
  }

  const setActiveSubmenu = (submenuId, isActive) => {
    if (isActive) {
      activeSubmenus.value.add(submenuId)
    } else {
      activeSubmenus.value.delete(submenuId)
    }
  }

  const isSubmenuActive = submenuId => {
    return activeSubmenus.value.has(submenuId)
  }

  const updateActiveSubmenuFromRoute = currentRoute => {
    // Clear all active submenus first
    activeSubmenus.value.clear()

    // Find which submenu contains the current route
    const routeMap = {
      '/pages/': 'pages',
      '/elements/': 'elements',
      '/components/': 'components',
      '/forms/': 'forms'
    }

    Object.entries(routeMap).forEach(([pathPrefix, submenuId]) => {
      if (currentRoute.startsWith(pathPrefix)) {
        activeSubmenus.value.add(submenuId)
      }
    })
  }

  const updateBodyClasses = () => {
    const body = document.body
    if (isCollapsed.value) {
      body.classList.add('closed-sidebar')
      if (isMobile.value) {
        body.classList.add('closed-sidebar-md')
      }
    } else {
      body.classList.remove('closed-sidebar', 'closed-sidebar-md', 'closed-sidebar-open')
    }
  }

  const initializeSidebar = currentRoute => {
    // Set initial window width
    updateWindowWidth(window.innerWidth)

    // Set active submenu based on current route
    updateActiveSubmenuFromRoute(currentRoute)

    // Apply initial body classes
    updateBodyClasses()
  }

  // Getters
  const getMenuItems = computed(() => menuItems.value)
  const getIsCollapsed = computed(() => isCollapsed.value)
  const getIsMobile = computed(() => isMobile.value)
  const getActiveSubmenus = computed(() => Array.from(activeSubmenus.value))

  return {
    // State
    isCollapsed,
    isMobile,
    activeSubmenus,
    windowWidth,
    menuItems,

    // Computed
    mobileBreakpoint,
    shouldAutoCollapse,
    getMenuItems,
    getIsCollapsed,
    getIsMobile,
    getActiveSubmenus,

    // Actions
    toggleCollapse,
    setCollapsed,
    updateWindowWidth,
    toggleSubmenu,
    setActiveSubmenu,
    isSubmenuActive,
    updateActiveSubmenuFromRoute,
    updateBodyClasses,
    initializeSidebar
  }
})
