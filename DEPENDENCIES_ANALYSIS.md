# Dependencies Analysis - Pre-Migration

## Current Dependencies (Vue 2.6 + Bootstrap 4)

### Core Framework
- `vue: ^2.6.10` → **MIGRATE TO** `vue: ^3.5.17`
- `vue-router: ^3.0.5` → **MIGRATE TO** `vue-router: ^4.4.5`
- `vuex: ^3.1.0` → **MIGRATE TO** `vuex: ^4.0.0` (or Pinia)

### UI Framework
- `bootstrap: ^4.3.1` → **MIGRATE TO** `bootstrap: ^5.3.2`
- `bootstrap-vue: ^2.0.0-rc.18` → **MIGRATE TO** `bootstrap-vue-next: ^0.24.23`

### Build Tools
- `@vue/cli-service: ^4.5.11` → **UPDATE TO** `@vue/cli-service: ^5.0.8`
- `@vue/cli-plugin-babel: ^3.6.0` → **UPDATE TO** `@vue/cli-plugin-babel: ^5.0.8`
- `@vue/cli-plugin-eslint: ^3.6.0` → **UPDATE TO** `@vue/cli-plugin-eslint: ^5.0.8`
- `vue-template-compiler: ^2.6.10` → **REPLACE WITH** `@vue/compiler-sfc: ^3.5.17`

### Third-party Libraries - Compatible
- ✅ `vue-sidebar-menu: ^3.7.0` → **COMPATIBLE** (latest: 5.7.0)
- ✅ `vue-chartjs: ^3.4.2` → **UPDATE TO** `vue-chartjs: ^5.3.2`
- ✅ `chart.js: ^2.8.0` → **UPDATE TO** `chart.js: ^4.4.0`

### Third-party Libraries - Need Replacement
- ❌ `vue-perfect-scrollbar: ^0.1.0` → **REPLACE WITH** `vue3-perfect-scrollbar: ^2.0.0`
- ❌ `vue2-google-maps: ^0.10.6` → **REPLACE WITH** `@googlemaps/js-api-loader: ^1.16.2`

### Icon Libraries
- ✅ `@fortawesome/fontawesome-svg-core: ^1.2.17` → **UPDATE TO** `^6.5.1`
- ✅ `@fortawesome/free-solid-svg-icons: ^5.8.1` → **UPDATE TO** `^6.5.1`
- ✅ `@fortawesome/vue-fontawesome: ^0.1.6` → **UPDATE TO** `^3.0.5`
- ✅ `pe7-icon: ^1.0.4` → **KEEP** (CSS only)

### Styling
- ✅ `node-sass: ^4.14.1` → **UPDATE TO** `sass: ^1.69.5`
- ✅ `sass-loader: ^7.1.0` → **UPDATE TO** `sass-loader: ^13.3.2`
- ✅ `animate-sass: ^0.8.2` → **KEEP**

### Utilities
- ✅ `es6-promise: ^4.2.6` → **REMOVE** (not needed in modern browsers)
- ✅ `popper.js: ^1.15.0` → **REPLACE WITH** `@popperjs/core: ^2.11.8`
- ✅ `perfect-scrollbar: ^1.4.0` → **KEEP** (dependency of vue3-perfect-scrollbar)

## Migration Strategy by Category

### High Priority (Core Framework)
1. Vue 3 + Migration Build
2. Vue Router 4
3. Bootstrap 5
4. BootstrapVue → BootstrapVueNext

### Medium Priority (Libraries)
1. Update compatible libraries
2. Replace incompatible libraries
3. Update build tools

### Low Priority (Optional)
1. Migrate to Pinia from Vuex
2. Add TypeScript support
3. Implement Composition API

## Estimated Breaking Changes Impact

### High Impact
- All BootstrapVue components need rewriting
- Vue Router navigation guards syntax changes
- Bootstrap 5 data attribute changes
- Perfect Scrollbar component usage

### Medium Impact
- FontAwesome icon registration
- Chart.js configuration updates
- Google Maps implementation

### Low Impact
- Sass compilation
- ES6 Promise removal
- Popper.js replacement