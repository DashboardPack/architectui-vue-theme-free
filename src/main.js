import { createApp } from 'vue'
import router from './router'
import pinia from './stores'

// Import the original base.scss which includes all theme styling
import './assets/base.scss'

// Import vue3-perfect-scrollbar CSS
import 'vue3-perfect-scrollbar/style.css'

// Import BootstrapVueNext components individually
import {
  BButton,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BFormCheckboxGroup,
  BFormRadioGroup,
  BFormInput,
  BFormCheckbox,
  BFormSelect,
  BFormTextarea,
  BFormFile,
  BFormInvalidFeedback,
  BInputGroup,
  BInputGroupText,
  BModal,
  BCollapse,
  BDropdown,
  BDropdownItem,
  BDropdownItemButton,
  BDropdownHeader,
  BDropdownDivider,
  BTooltip,
  BPopover,
  BProgress,
  BProgressBar,
  BTable,
  BTabs,
  BTab
} from 'bootstrap-vue-next'

// Import directives separately
import { createBootstrap } from 'bootstrap-vue-next'

// Import FontAwesome - Vue 3 Proper Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import specific icons for better tree-shaking
import {
  faCheck,
  faTrashAlt,
  faAngleDown,
  faAngleUp,
  faCalendarAlt,
  faTh,
  faSearch,
  faBell,
  faUser,
  faCog,
  faSignOutAlt,
  faHome,
  faChartBar,
  faTable,
  faWrench,
  faDatabase,
  faShoppingCart,
  faEnvelope,
  faEye,
  faEdit,
  faPlus,
  faMinus,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faDownload,
  faUpload,
  faSave,
  faTrash,
  faRefresh,
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
  faInfo,
  faExclamation,
  faQuestion,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faEllipsisVertical,
  faCoffee,
  faSpinner,
  faCheckSquare,
  faAngry,
  faStar,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

import Default from './Layout/Wrappers/baseLayout.vue'
import Pages from './Layout/Wrappers/pagesLayout.vue'

// Add specific icons to library for better tree-shaking
library.add(
  faCheck,
  faTrashAlt,
  faAngleDown,
  faAngleUp,
  faCalendarAlt,
  faTh,
  faSearch,
  faBell,
  faUser,
  faCog,
  faSignOutAlt,
  faHome,
  faChartBar,
  faTable,
  faWrench,
  faDatabase,
  faShoppingCart,
  faEnvelope,
  faEye,
  faEdit,
  faPlus,
  faMinus,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faDownload,
  faUpload,
  faSave,
  faTrash,
  faRefresh,
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
  faInfo,
  faExclamation,
  faQuestion,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faEllipsisVertical,
  faCoffee,
  faSpinner,
  faCheckSquare,
  faAngry,
  faStar,
  faChevronDown
)

const app = createApp(App)

app.use(router)
app.use(pinia) // Vue 3 state management
app.use(createBootstrap()) // BootstrapVueNext with directives
// Register BootstrapVueNext components with kebab-case names
app.component('b-button', BButton)
app.component('b-row', BRow)
app.component('b-col', BCol)
app.component('b-card', BCard)
app.component('b-card-body', BCardBody)
app.component('b-card-header', BCardHeader)
app.component('b-form-checkbox-group', BFormCheckboxGroup)
app.component('b-form-radio-group', BFormRadioGroup)
app.component('b-form-input', BFormInput)
app.component('b-form-checkbox', BFormCheckbox)
app.component('b-form-select', BFormSelect)
app.component('b-form-textarea', BFormTextarea)
app.component('b-form-file', BFormFile)
app.component('b-form-invalid-feedback', BFormInvalidFeedback)
app.component('b-input-group', BInputGroup)
app.component('b-input-group-text', BInputGroupText)
app.component('b-modal', BModal)
app.component('b-collapse', BCollapse)
app.component('b-dropdown', BDropdown)
app.component('b-dropdown-item', BDropdownItem)
app.component('b-dropdown-item-button', BDropdownItemButton)
app.component('b-dropdown-header', BDropdownHeader)
app.component('b-dropdown-divider', BDropdownDivider)
app.component('b-tooltip', BTooltip)
app.component('b-popover', BPopover)
app.component('b-progress', BProgress)
app.component('b-progress-bar', BProgressBar)
app.component('b-table', BTable)
app.component('b-tabs', BTabs)
app.component('b-tab', BTab)

app.component('default-layout', Default)
app.component('userpages-layout', Pages)
app.component('font-awesome-icon', FontAwesomeIcon)

// Suppress browser extension errors in development
if (import.meta.env.DEV) {
  window.addEventListener('error', event => {
    if (
      event.message?.includes('message channel closed') ||
      event.message?.includes('listener indicated an asynchronous response') ||
      event.message?.includes('Extension context invalidated')
    ) {
      event.preventDefault()
      return false
    }
  })

  window.addEventListener('unhandledrejection', event => {
    if (
      event.reason?.message?.includes('message channel closed') ||
      event.reason?.message?.includes('Could not establish connection') ||
      event.reason?.message?.includes('Receiving end does not exist') ||
      event.reason?.message?.includes('listener indicated an asynchronous response') ||
      event.reason?.message?.includes('Extension context invalidated')
    ) {
      event.preventDefault()
      return false
    }
  })
}

app.mount('#app')
