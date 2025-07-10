# ArchitectUI Vue Migration Plan: Vue 2 → Vue 3 + Bootstrap 4 → Bootstrap 5

## Overview
This document outlines a comprehensive migration plan for upgrading the ArchitectUI Vue theme from Vue 2.6 + Bootstrap 4 to Vue 3.5.17 + Bootstrap 5. This is a significant upgrade that requires careful planning and execution.

## Migration Strategy
We recommend a **phased approach** using Vue's migration build to minimize risk and allow for gradual migration.

## Phase 1: Pre-Migration Assessment & Setup (Week 1)

### 1.1 Create Migration Branch
```bash
git checkout -b migration/vue3-bootstrap5
```

### 1.2 Backup Current State
```bash
git tag pre-migration-backup
```

### 1.3 Dependency Analysis
Current dependencies that need updates:
- ✅ `vue-sidebar-menu` - Compatible with Vue 3 (v5.7.0)
- ✅ `vue-chartjs` - Compatible with Vue 3 (v5.3.2)
- ⚠️ `vue-perfect-scrollbar` - Need to replace with `vue3-perfect-scrollbar`
- ❌ `bootstrap-vue` - Not compatible with Vue 3, need to migrate to BootstrapVueNext or direct Bootstrap 5
- ❌ `vue2-google-maps` - Need to replace with Vue 3 compatible solution

### 1.4 Testing Strategy Setup
- Set up automated testing framework (Jest + Vue Test Utils)
- Create visual regression tests for key components
- Document current functionality as baseline

## Phase 2: Core Framework Migration (Weeks 2-3)

### 2.1 Install Vue 3 Migration Build
```bash
npm install vue@next @vue/compat
npm install vue-loader@next @vue/compiler-sfc
```

### 2.2 Update Vue CLI Configuration
Update `vue.config.js`:
```javascript
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}
```

### 2.3 Update main.js
Transform from Vue 2 to Vue 3 syntax:
```javascript
// Before (Vue 2)
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue)
Vue.component('default-layout', Default)
Vue.component('userpages-layout', Pages)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// After (Vue 3)
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrappers/baseLayout.vue'
import Pages from './Layout/Wrappers/pagesLayout.vue'

const app = createApp(App)
app.use(router)
app.component('default-layout', Default)
app.component('userpages-layout', Pages)
app.mount('#app')
```

### 2.4 Update Router Configuration
Migrate to Vue Router 4:
```bash
npm install vue-router@4
```

Update `router/index.js`:
```javascript
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    // ... existing routes
  ]
})
```

## Phase 3: Bootstrap Migration (Weeks 4-5)

### 3.1 Remove Bootstrap 4 Dependencies
```bash
npm uninstall bootstrap-vue bootstrap@4
```

### 3.2 Install Bootstrap 5
```bash
npm install bootstrap@5.3.2 @popperjs/core
```

### 3.3 Update SCSS Imports
Replace Bootstrap 4 imports in `src/assets/base.scss`:
```scss
// Replace Bootstrap 4 paths with Bootstrap 5 paths
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
// ... continue with Bootstrap 5 structure
```

### 3.4 Critical Bootstrap 5 Breaking Changes to Address

#### 3.4.1 Data Attributes
Find and replace across all components:
- `data-toggle` → `data-bs-toggle`
- `data-target` → `data-bs-target`
- `data-dismiss` → `data-bs-dismiss`

#### 3.4.2 Grid System
- Replace `.no-gutters` with `.g-0`
- Update gutter utilities (now using rem instead of px)

#### 3.4.3 Component Classes
- Replace `.badge-*` with `.bg-*` utility classes
- Replace `.badge-pill` with `.rounded-pill`
- Remove `.media` component usage (replace with flexbox utilities)

#### 3.4.4 Form Controls
- Update form classes and structure
- Replace `.form-control-*` sizing classes

## Phase 4: Component Library Migration (Weeks 6-7)

### 4.1 BootstrapVue Replacement Strategy
**Option A: BootstrapVueNext (Recommended)**
```bash
npm install bootstrap-vue-next@0.24.23
```

**Option B: Direct Bootstrap 5 + Custom Components**
- Create custom Vue 3 components wrapping Bootstrap 5
- Use Bootstrap 5 JavaScript components directly

### 4.2 Critical Component Migrations

#### 4.2.1 Modal Components
Update modal implementations:
```vue
<!-- Before (BootstrapVue) -->
<b-modal id="modal1" title="Bootstrap-Vue">
  <p class="my-4">Hello from modal!</p>
</b-modal>

<!-- After (BootstrapVueNext) -->
<BModal id="modal1" title="Bootstrap-Vue">
  <p class="my-4">Hello from modal!</p>
</BModal>
```

#### 4.2.2 Form Components
Migrate form components to Bootstrap 5 structure or BootstrapVueNext equivalents.

#### 4.2.3 Navigation Components
Update navbar and navigation components for Bootstrap 5 compatibility.

## Phase 5: Third-Party Library Updates (Week 8)

### 5.1 Perfect Scrollbar Migration
```bash
npm uninstall vue-perfect-scrollbar
npm install vue3-perfect-scrollbar
```

Update imports:
```javascript
// Before
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

// After
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
```

### 5.2 Google Maps Migration
```bash
npm uninstall vue2-google-maps
npm install @googlemaps/js-api-loader
```

Create Vue 3 compatible Google Maps component or use alternative like `vue3-google-map`.

### 5.3 Chart.js Updates
Update to latest vue-chartjs:
```bash
npm install vue-chartjs@5.3.2 chart.js@4
```

## Phase 6: Vue 3 Optimization (Week 9)

### 6.1 Remove Migration Build
Once all compatibility issues are resolved:
```bash
npm uninstall @vue/compat
```

Update `vue.config.js` to remove compatibility configuration.

### 6.2 Composition API Migration (Optional)
Gradually migrate components to use Composition API for better performance and TypeScript support.

### 6.3 Performance Optimizations
- Implement `<script setup>` syntax where applicable
- Use `defineAsyncComponent` for lazy loading
- Optimize bundle size with tree-shaking

## Phase 7: Testing & Quality Assurance (Week 10)

### 7.1 Comprehensive Testing
- Unit tests for all migrated components
- Integration tests for critical user flows
- Visual regression testing
- Performance benchmarking

### 7.2 Cross-Browser Testing
- Test in all target browsers
- Verify responsive behavior
- Check accessibility compliance

### 7.3 User Acceptance Testing
- Test all demo pages functionality
- Verify form submissions work correctly
- Test all interactive components

## Risk Assessment & Mitigation

### High-Risk Areas
1. **BootstrapVue Components**: Many components need complete rewrite
2. **Custom SCSS**: Bootstrap 5 variable changes may break styling
3. **Third-party integrations**: Maps, charts, and other integrations

### Mitigation Strategies
1. **Incremental migration**: Use feature flags to enable new components gradually
2. **Parallel development**: Keep both versions running until migration is complete
3. **Automated testing**: Catch regressions early with comprehensive test suite
4. **Documentation**: Maintain detailed migration notes for future reference

## Success Criteria
- [ ] All existing functionality preserved
- [ ] No visual regressions
- [ ] Performance improvements verified
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Team trained on new patterns

## Timeline Summary
- **Week 1**: Setup and assessment
- **Weeks 2-3**: Core Vue 3 migration
- **Weeks 4-5**: Bootstrap 5 migration
- **Weeks 6-7**: Component library migration
- **Week 8**: Third-party library updates
- **Week 9**: Vue 3 optimizations
- **Week 10**: Testing and QA

**Total Estimated Duration**: 10 weeks

## Resources Required
- 1 Senior Vue.js developer (full-time)
- 1 Frontend developer (part-time for testing)
- 1 QA engineer (part-time for final testing)
- Design review for any visual changes

## Post-Migration Benefits
- **Performance**: Vue 3 is faster and more efficient
- **Developer Experience**: Better TypeScript support, Composition API
- **Bundle Size**: Smaller runtime with tree-shaking
- **Future-Proof**: Long-term support for Vue 3 and Bootstrap 5
- **Modern Features**: Access to latest Vue 3 and Bootstrap 5 features

## Conclusion
This migration is complex but achievable with proper planning and execution. The phased approach minimizes risk while ensuring a smooth transition to modern frameworks. The investment will pay dividends in improved performance, maintainability, and access to modern development features.