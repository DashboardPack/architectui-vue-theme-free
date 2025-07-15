import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

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
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

// Add FontAwesome icons to library
library.add(fas)

const app = createApp(App);
const pinia = createPinia();

// Completely disable Pinia devtools to avoid birpc dependency issues
if (typeof window !== 'undefined') {
  pinia._devtools = false;
  window.__PINIA__ = undefined;
}

app.use(router);
app.use(pinia); // Vue 3 state management
// Register BootstrapVueNext components with kebab-case names
app.component('b-button', BButton);
app.component('b-row', BRow);
app.component('b-col', BCol);
app.component('b-card', BCard);
app.component('b-card-body', BCardBody);
app.component('b-card-header', BCardHeader);
app.component('b-form-checkbox-group', BFormCheckboxGroup);
app.component('b-form-radio-group', BFormRadioGroup);
app.component('b-form-input', BFormInput);
app.component('b-form-checkbox', BFormCheckbox);
app.component('b-form-select', BFormSelect);
app.component('b-form-textarea', BFormTextarea);
app.component('b-form-file', BFormFile);
app.component('b-form-invalid-feedback', BFormInvalidFeedback);
app.component('b-input-group', BInputGroup);
app.component('b-input-group-text', BInputGroupText);
app.component('b-modal', BModal);
app.component('b-collapse', BCollapse);
app.component('b-dropdown', BDropdown);
app.component('b-dropdown-item', BDropdownItem);
app.component('b-dropdown-item-button', BDropdownItemButton);
app.component('b-dropdown-header', BDropdownHeader);
app.component('b-dropdown-divider', BDropdownDivider);
app.component('b-tooltip', BTooltip);
app.component('b-popover', BPopover);
app.component('b-progress', BProgress);
app.component('b-progress-bar', BProgressBar);
app.component('b-table', BTable);
app.component('b-tabs', BTabs);
app.component('b-tab', BTab);

app.component('default-layout', Default);
app.component('userpages-layout', Pages);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
