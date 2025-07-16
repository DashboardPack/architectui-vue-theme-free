/**
 * UI Store
 * Manages UI state, theme, sidebar, and layout preferences
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // ===== STATE =====

  // Sidebar state
  const sidebarCollapsed = ref(false)
  const sidebarHover = ref(false)
  const sidebarWidth = ref(280)
  const sidebarCollapsedWidth = ref(80)

  // Theme state
  const theme = ref('light')
  const primaryColor = ref('#69aa8a')
  const sidebarTheme = ref('default')

  // Layout state
  const pageTitle = ref('Dashboard')
  const pageSubtitle = ref('Welcome to ArchitectUI')
  const pageIcon = ref('pe-7s-rocket')

  // Mobile responsiveness
  const isMobile = ref(false)
  const mobileBreakpoint = ref(768)
  const mobileSidebarOpen = ref(false)
  const mobileMenuOpen = ref(false)

  // Active menu states
  const activeMenus = ref({
    pages: false,
    elements: false,
    components: false,
    forms: false
  })

  // Header state
  const headerSearchOpen = ref(false)
  const headerNotificationsOpen = ref(false)
  const headerUserMenuOpen = ref(false)

  // Modal state
  const activeModals = ref([])

  // Loading states
  const pageLoading = ref(false)
  const sidebarLoading = ref(false)

  // ===== COMPUTED =====

  // Get current sidebar width based on state
  const currentSidebarWidth = computed(() => {
    if (isMobile.value) return sidebarCollapsed.value ? '0px' : `${sidebarWidth.value}px`
    return sidebarCollapsed.value ? `${sidebarCollapsedWidth.value}px` : `${sidebarWidth.value}px`
  })

  // Check if sidebar should show text
  const shouldShowSidebarText = computed(() => {
    return !sidebarCollapsed.value || (sidebarCollapsed.value && sidebarHover.value)
  })

  // Get theme classes
  const themeClasses = computed(() => ({
    'theme-light': theme.value === 'light',
    'theme-dark': theme.value === 'dark',
    'sidebar-collapsed': sidebarCollapsed.value,
    'sidebar-hover': sidebarHover.value,
    'mobile-view': isMobile.value
  }))

  // Check if any menu is active
  const hasActiveMenu = computed(() => {
    return Object.values(activeMenus.value).some(active => active)
  })

  // Get body classes for layout
  const bodyClasses = computed(() => {
    const classes = []

    if (sidebarCollapsed.value) {
      classes.push('closed-sidebar')
    }

    if (isMobile.value) {
      classes.push('closed-sidebar-md')
    }

    if (theme.value === 'dark') {
      classes.push('dark-theme')
    }

    return classes
  })

  // ===== ACTIONS =====

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value

    // Save preference to localStorage
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.value.toString())

    // Update body classes
    updateBodyClasses()
  }

  // Set sidebar hover state
  const setSidebarHover = hover => {
    sidebarHover.value = hover
  }

  // Toggle specific menu
  const toggleMenu = menuName => {
    // Close all other menus first
    Object.keys(activeMenus.value).forEach(key => {
      if (key !== menuName) {
        activeMenus.value[key] = false
      }
    })

    // Toggle the specified menu
    activeMenus.value[menuName] = !activeMenus.value[menuName]
  }

  // Set active menu based on route
  const setActiveMenuFromRoute = routePath => {
    // Reset all menus
    Object.keys(activeMenus.value).forEach(key => {
      activeMenus.value[key] = false
    })

    // Determine which menu should be active
    if (routePath.startsWith('/pages/')) {
      activeMenus.value.pages = true
    } else if (routePath.startsWith('/elements/')) {
      activeMenus.value.elements = true
    } else if (routePath.startsWith('/components/')) {
      activeMenus.value.components = true
    } else if (routePath.startsWith('/forms/')) {
      activeMenus.value.forms = true
    }
  }

  // Change theme
  const setTheme = newTheme => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)

    // Update document attributes
    document.documentElement.setAttribute('data-theme', newTheme)
    updateBodyClasses()
  }

  // Set page title and metadata
  const setPageTitle = (title, subtitle = null, icon = null) => {
    pageTitle.value = title
    if (subtitle) pageSubtitle.value = subtitle
    if (icon) pageIcon.value = icon

    // Update document title
    document.title = `${title} - ArchitectUI Vue`
  }

  // Handle window resize
  const handleResize = () => {
    const width = window.innerWidth
    const wasMobile = isMobile.value

    isMobile.value = width < mobileBreakpoint.value

    // Auto-collapse sidebar on mobile
    if (isMobile.value && !wasMobile) {
      sidebarCollapsed.value = true
    } else if (!isMobile.value && wasMobile) {
      // Restore sidebar state from localStorage on desktop
      const savedState = localStorage.getItem('sidebarCollapsed')
      sidebarCollapsed.value = savedState === 'true'
    }

    updateBodyClasses()
  }

  // Update body classes based on current state
  const updateBodyClasses = () => {
    const body = document.body

    // Remove all theme classes
    body.classList.remove('closed-sidebar', 'closed-sidebar-md', 'dark-theme')

    // Add current classes
    bodyClasses.value.forEach(className => {
      body.classList.add(className)
    })
  }

  // Toggle header search
  const toggleHeaderSearch = () => {
    headerSearchOpen.value = !headerSearchOpen.value

    // Close other header menus
    headerNotificationsOpen.value = false
    headerUserMenuOpen.value = false
  }

  // Toggle header notifications
  const toggleHeaderNotifications = () => {
    headerNotificationsOpen.value = !headerNotificationsOpen.value

    // Close other header menus
    headerSearchOpen.value = false
    headerUserMenuOpen.value = false
  }

  // Toggle header user menu
  const toggleHeaderUserMenu = () => {
    headerUserMenuOpen.value = !headerUserMenuOpen.value

    // Close other header menus
    headerSearchOpen.value = false
    headerNotificationsOpen.value = false
  }

  // Close all header menus
  const closeAllHeaderMenus = () => {
    headerSearchOpen.value = false
    headerNotificationsOpen.value = false
    headerUserMenuOpen.value = false
  }

  // Mobile menu actions
  const toggleMobileSidebar = () => {
    mobileSidebarOpen.value = !mobileSidebarOpen.value

    // Update body classes
    const body = document.body
    if (mobileSidebarOpen.value) {
      body.classList.add('closed-sidebar-open')
    } else {
      body.classList.remove('closed-sidebar-open')
    }
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value

    // Update body classes
    const body = document.body
    if (mobileMenuOpen.value) {
      body.classList.add('header-menu-open')
    } else {
      body.classList.remove('header-menu-open')
    }
  }

  // Set active menu state directly
  const setActiveMenu = (menuName, isActive) => {
    if (Object.prototype.hasOwnProperty.call(activeMenus.value, menuName)) {
      activeMenus.value[menuName] = isActive
    }
  }

  // Update window width and mobile state
  const updateWindowWidth = width => {
    isMobile.value = width < 1350

    // Update body classes based on window width
    const body = document.body
    if (isMobile.value) {
      body.classList.add('closed-sidebar', 'closed-sidebar-md')
    } else {
      body.classList.remove('closed-sidebar', 'closed-sidebar-md')
    }
  }

  // Modal management
  const openModal = (modalId, props = {}) => {
    const modal = {
      id: modalId,
      props,
      timestamp: Date.now()
    }

    activeModals.value.push(modal)
  }

  const closeModal = modalId => {
    const index = activeModals.value.findIndex(modal => modal.id === modalId)
    if (index > -1) {
      activeModals.value.splice(index, 1)
    }
  }

  const closeAllModals = () => {
    activeModals.value = []
  }

  // Initialize UI state from localStorage
  const initializeFromStorage = () => {
    try {
      // Restore sidebar state
      const savedSidebarState = localStorage.getItem('sidebarCollapsed')
      if (savedSidebarState !== null) {
        sidebarCollapsed.value = savedSidebarState === 'true'
      }

      // Restore theme
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme)
      }

      // Initialize window resize handler
      handleResize()
      window.addEventListener('resize', handleResize)

      // Initialize body classes
      updateBodyClasses()
    } catch (error) {
      console.warn('Failed to initialize UI state from localStorage:', error)
    }
  }

  // Cleanup
  const cleanup = () => {
    window.removeEventListener('resize', handleResize)
  }

  // Export store state and actions
  return {
    // State
    sidebarCollapsed,
    sidebarHover,
    sidebarWidth,
    sidebarCollapsedWidth,
    theme,
    primaryColor,
    sidebarTheme,
    pageTitle,
    pageSubtitle,
    pageIcon,
    isMobile,
    mobileBreakpoint,
    mobileSidebarOpen,
    mobileMenuOpen,
    activeMenus,
    headerSearchOpen,
    headerNotificationsOpen,
    headerUserMenuOpen,
    activeModals,
    pageLoading,
    sidebarLoading,

    // Computed
    currentSidebarWidth,
    shouldShowSidebarText,
    themeClasses,
    hasActiveMenu,
    bodyClasses,

    // Actions
    toggleSidebar,
    setSidebarHover,
    toggleMenu,
    setActiveMenuFromRoute,
    setTheme,
    setPageTitle,
    handleResize,
    updateBodyClasses,
    toggleHeaderSearch,
    toggleHeaderNotifications,
    toggleHeaderUserMenu,
    closeAllHeaderMenus,
    toggleMobileSidebar,
    toggleMobileMenu,
    setActiveMenu,
    updateWindowWidth,
    openModal,
    closeModal,
    closeAllModals,
    initializeFromStorage,
    cleanup
  }
})
