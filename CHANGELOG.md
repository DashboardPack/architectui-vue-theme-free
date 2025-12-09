# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-12-09 - **Complete Dependency Update**

### 🚀 **Major Dependency Updates**

This release updates all dependencies to the latest stable versions while maintaining full backward compatibility and zero vulnerabilities.

### ✅ **Updated - Major Version Upgrades**

| Package                   | Previous | Current | Notes                              |
| ------------------------- | -------- | ------- | ---------------------------------- |
| FontAwesome (core)        | 6.7.2    | 7.1.0   | New icon designs, better scaling   |
| FontAwesome (solid)       | 6.7.2    | 7.1.0   | Improved icon consistency          |
| FontAwesome (brands)      | 7.0.0    | 7.1.0   | Latest brand icons                 |
| bootstrap-vue-next        | 0.30.4   | 0.40.9  | New components, bug fixes          |
| vitest                    | 3.2.4    | 4.0.15  | Faster tests, better DX            |
| @vitest/ui                | 3.2.4    | 4.0.15  | Enhanced test UI                   |
| jsdom                     | 26.1.0   | 27.3.0  | Better DOM simulation              |
| @googlemaps/js-api-loader | 1.16.10  | 2.0.2   | Modernized API                     |

### ✅ **Updated - Minor/Patch Upgrades**

| Package                         | Previous | Current |
| ------------------------------- | -------- | ------- |
| vue                             | 3.5.17   | 3.5.25  |
| @vue/compat                     | 3.5.17   | 3.5.25  |
| vue-router                      | 4.5.1    | 4.6.3   |
| vite                            | 7.1.11   | 7.2.7   |
| pinia                           | 3.0.3    | 3.0.4   |
| typescript                      | 5.8.3    | 5.9.3   |
| eslint                          | 9.31.0   | 9.39.1  |
| @eslint/js                      | 9.31.0   | 9.39.1  |
| eslint-plugin-vue               | 10.3.0   | 10.6.2  |
| @typescript-eslint/eslint-plugin| 8.37.0   | 8.49.0  |
| @typescript-eslint/parser       | 8.37.0   | 8.49.0  |
| sass                            | 1.89.2   | 1.95.0  |
| prettier                        | 3.6.2    | 3.7.4   |
| bootstrap                       | 5.3.7    | 5.3.8   |
| chart.js                        | 4.5.0    | 4.5.1   |
| vue-chartjs                     | 5.3.2    | 5.3.3   |
| vue-sidebar-menu                | 5.7.0    | 5.9.0   |
| core-js                         | 3.44.0   | 3.47.0  |
| @vitejs/plugin-vue              | 6.0.0    | 6.0.2   |
| @vitejs/plugin-vue-jsx          | 5.0.1    | 5.1.2   |
| @babel/eslint-parser            | 7.28.0   | 7.28.5  |
| @babel/preset-env               | 7.28.0   | 7.28.5  |
| @types/node                     | 24.0.15  | 24.10.2 |
| autoprefixer                    | 10.4.21  | 10.4.22 |
| lint-staged                     | 16.1.2   | 16.2.7  |
| vue-tsc                         | 3.0.1    | 3.1.8   |
| @fortawesome/vue-fontawesome    | 3.0.8    | 3.1.2   |

### 🔄 **Changed**

- **Vitest Configuration**: Updated `vitest.config.ts` to use `defineConfig` from `vitest/config` (required for vitest 4.x)
- **Sass Deprecations**: Added `if-function` to silenced deprecations in `vite.config.ts` for Bootstrap SCSS compatibility

### 🛠️ **Technical Details**

- **Zero Vulnerabilities**: `npm audit` reports 0 vulnerabilities
- **All Tests Pass**: 8/8 tests passing with vitest 4.x
- **Type Check**: Clean TypeScript compilation
- **Lint**: No ESLint errors or warnings
- **Build**: Production build successful with optimized chunks

### 📋 **Migration Notes**

This release is fully backward compatible. No code changes required for existing projects.

#### Vitest 4.x Users

If you have custom vitest configuration, update the import:

```typescript
// Before (vitest 3.x)
import { defineConfig } from 'vite'

// After (vitest 4.x)
import { defineConfig } from 'vitest/config'
```

---

## [2.0.1] - 2025-07-23 - **Production Enhancements & UX Improvements**

### 🎯 **Enhanced Production Release - UI/UX Refinements**

This release focuses on production-ready enhancements, user experience improvements, and deployment optimizations based on the complete Vue 3 modernization.

### ✅ **Added**

#### **UI/UX Enhancements**
- **NEW**: Smooth popover and tooltip animations without visual glitches
- **NEW**: Fully functional footer dropdowns with social media and quick links
- **NEW**: Professional footer dropdown positioning above trigger buttons
- **NEW**: Left-aligned numbers in dashboard statistics widgets for improved readability
- **NEW**: Social media icons with brand-specific colors (Twitter, Facebook, LinkedIn, GitHub)
- **NEW**: FontAwesome brand icons integration with proper tree-shaking
- **NEW**: Click-outside functionality for dropdown management
- **NEW**: Animated dropdown transitions with fade-in effects

#### **Production Deployment Features**
- **NEW**: Environment-specific base path configuration for subdirectory deployment
- **NEW**: Production-optimized asset loading with correct paths
- **NEW**: Subdirectory routing support for complex deployment scenarios
- **NEW**: CORS-compliant asset serving for production environments
- **NEW**: Optimized build configuration for live demo deployment

#### **Developer Experience**
- **NEW**: Local preview server testing capabilities
- **NEW**: Production build verification workflow
- **NEW**: Deployment documentation with step-by-step process
- **NEW**: Asset path debugging and optimization tools

### 🔄 **Changed**

#### **UI Components**
- **IMPROVED**: Footer component completely rewritten with native HTML dropdowns
- **IMPROVED**: Popover animations simplified to eliminate transform conflicts
- **IMPROVED**: Dashboard widget layouts optimized for better number display
- **IMPROVED**: Footer styling with high-specificity CSS overrides for positioning
- **IMPROVED**: Social media dropdown items with proper icon placement

#### **Color Scheme**
- **RESTORED**: Original professional green theme (#69aa8a) throughout application
- **UPDATED**: All instances of bright green (#3ac47d) replaced with original muted green
- **ENHANCED**: Consistent color application across components, charts, and UI elements
- **OPTIMIZED**: Theme variables properly configured in Bootstrap custom SCSS

#### **Build System**
- **UPDATED**: Vite configuration with environment-specific base paths
- **UPDATED**: Vue Router configuration for production subdirectory support
- **ENHANCED**: Asset path resolution for both development and production
- **OPTIMIZED**: Build output structure for deployment compatibility

### 🛠️ **Fixed**

#### **Critical Animation Issues**
- **FIXED**: Jumpy popover animations caused by conflicting CSS transforms
- **FIXED**: Tooltip positioning glitches during show/hide transitions
- **FIXED**: Animation timing conflicts between Vue components and global SCSS
- **FIXED**: Visual jumping when popovers repositioned after initial display

#### **Footer Functionality**
- **FIXED**: Non-working social media dropdown links
- **FIXED**: Empty dropdown fields showing instead of functional menus
- **FIXED**: Dropdown positioning appearing above wrong elements
- **FIXED**: Footer dropdowns appearing above dashboard widgets instead of buttons
- **FIXED**: Missing social media functionality and external link handling

#### **Production Deployment Issues**
- **FIXED**: Asset loading errors in subdirectory deployment (404 and CORS errors)
- **FIXED**: Incorrect asset paths causing MIME type errors
- **FIXED**: Router configuration for subdirectory base paths
- **FIXED**: FontAwesome brand icons build errors in production
- **FIXED**: CSS and JavaScript asset loading from wrong paths

#### **Color Scheme Issues**
- **FIXED**: Bright green color (#3ac47d) replaced with original theme color
- **FIXED**: Inconsistent color application across different components
- **FIXED**: Chart color schemes updated to match original design
- **FIXED**: Progress bars and UI elements color consistency

#### **Dashboard Widget Issues**
- **FIXED**: Number alignment in statistics widgets (changed to left-aligned)
- **FIXED**: Widget layout inconsistencies with original design
- **FIXED**: Typography and spacing in dashboard stat displays

### 🎯 **Production Deployment**

#### **Live Demo**
- **DEPLOYED**: https://demo.dashboardpack.com/architectui-vue-free/
- **STATUS**: Successfully deployed and fully functional
- **VERIFIED**: All features working correctly in production environment
- **TESTED**: Cross-browser compatibility and responsive design confirmed

#### **Deployment Configuration**
- **CONFIGURED**: Subdirectory routing for production environment
- **OPTIMIZED**: Asset loading and caching for optimal performance
- **SECURED**: CORS and security headers properly configured
- **VALIDATED**: All console errors resolved and functionality verified

### 📊 **Technical Improvements**

#### **Asset Management**
- **OPTIMIZED**: Production build asset paths for subdirectory deployment
- **ENHANCED**: FontAwesome integration with brand icons support
- **IMPROVED**: CSS cascade management with proper specificity
- **STREAMLINED**: Build process for consistent production deployments

#### **Component Architecture**
- **REFINED**: Footer component with native dropdown implementation
- **ENHANCED**: Animation system with conflict-free CSS transitions
- **IMPROVED**: Store integration patterns for UI state management
- **OPTIMIZED**: Component lifecycle management for better performance

### 🔧 **Development Workflow**

#### **Build Process**
- **ADDED**: Production build testing with local HTTP server
- **ENHANCED**: Asset path validation for deployment scenarios
- **IMPROVED**: Build configuration for both development and production
- **STREAMLINED**: Deployment preparation and verification steps

#### **Quality Assurance**
- **IMPLEMENTED**: Comprehensive testing of UI animations and interactions
- **VERIFIED**: Cross-component compatibility and state management
- **VALIDATED**: Production deployment process and functionality
- **CONFIRMED**: Original design integrity maintained throughout enhancements

### 📋 **Migration Notes**

This release maintains full backward compatibility with the Vue 3 modernization while adding significant production-ready enhancements:

#### **No Breaking Changes**
- All existing Vue 3 components remain fully compatible
- Pinia stores continue to work without modification
- Existing routing and navigation patterns preserved
- Component APIs and props remain unchanged

#### **Enhanced Features**
- Footer dropdowns now fully functional (previously placeholder)
- Animations significantly smoother and more professional
- Color scheme restored to original professional appearance
- Dashboard widgets optimized for better readability

### 🚀 **What's Next**

This release establishes a solid foundation for:
- Continued Vue 3 ecosystem updates
- Additional UI component enhancements
- Performance optimizations
- Extended feature development

---

## [2.0.0] - 2025-01-21 - **Vue 3 Modernization Complete**

### 🚀 **Major Release - Complete Vue 3 Migration**

This release represents a **complete modernization** of the ArchitectUI Vue template from Vue 2.6 to Vue 3.5.17 with zero vulnerabilities and modern development practices.

### ✅ **Added**

#### **Vue 3 Composition API**
- **NEW**: Full Vue 3 Composition API implementation throughout key components
- **NEW**: `defineComponent` usage for better TypeScript support
- **NEW**: Modern reactive patterns with `ref()`, `computed()`, `reactive()`
- **NEW**: Lifecycle hooks (`onMounted`, `onUnmounted`, `watch`)
- **NEW**: `<script setup>` syntax support

#### **Pinia Store Management**
- **NEW**: `/src/stores/dashboard.js` - Analytics data, statistics, todos, timeline events
- **NEW**: `/src/stores/ui.js` - Sidebar state, theme management, mobile responsiveness
- **NEW**: `/src/stores/notifications.js` - System messages and alerts
- **NEW**: `/src/stores/index.js` - Centralized store configuration
- **NEW**: LocalStorage persistence for user preferences
- **NEW**: Reactive state updates across components

#### **Modern Component Architecture**
- **NEW**: `/src/components/DashboardWidget.vue` - Reusable widget component
- **NEW**: `/src/components/StoreDemo.vue` - Demonstrates Pinia usage patterns
- **NEW**: Modular component system with proper prop validation
- **NEW**: Tree-shaking optimized imports

#### **Build System & Tooling**
- **NEW**: Vite 7.x build system (replaces Vue CLI)
- **NEW**: Hot Module Replacement for instant updates
- **NEW**: ESLint 9.x with Vue 3 specific rules
- **NEW**: Modern JavaScript (ES2020+) support
- **NEW**: TypeScript-ready component structure

#### **UI Framework Updates**
- **NEW**: Bootstrap 5 integration (upgraded from Bootstrap 4)
- **NEW**: BootstrapVueNext components (replaces BootstrapVue)
- **NEW**: Modern utility classes and CSS Grid/Flexbox patterns
- **NEW**: Improved responsive design

#### **Chart & Visualization**
- **NEW**: Chart.js 4.x with modern API usage
- **NEW**: Vue-chartjs 5.x for Vue 3 compatibility
- **NEW**: Optimized chart performance and rendering

#### **Icons & Assets**
- **NEW**: FontAwesome Vue 3 integration with tree-shaking
- **NEW**: Bundle size optimization (1MB+ → 88KB for FontAwesome)
- **NEW**: Modern icon loading patterns

#### **UI/UX Enhancements**
- **NEW**: Calendar button tooltip with "View Calendar Events" message
- **NEW**: Profile dropdown indicator with clean chevron design
- **NEW**: Optimized header spacing and layout positioning
- **NEW**: Professional header component with proper visual hierarchy

### 🔄 **Changed**

#### **Framework Migration**
- **BREAKING**: Migrated from Vue 2.6 to Vue 3.5.17
- **BREAKING**: Replaced Vuex with Pinia 3.x
- **BREAKING**: Updated Vue Router to 4.x
- **BREAKING**: Migrated build system from Vue CLI to Vite

#### **Component Updates**
- **UPDATED**: All layout components converted to Composition API
- **UPDATED**: Sidebar component with Pinia store integration
- **UPDATED**: Header components with reactive state management
- **UPDATED**: PageTitle component with modern prop validation
- **UPDATED**: SearchBox component with reactive search functionality

#### **State Management**
- **REPLACED**: Vuex with Pinia for better Vue 3 integration
- **IMPROVED**: Centralized state management patterns
- **ENHANCED**: Persistent storage integration
- **OPTIMIZED**: Reactive updates and computed properties

#### **Styling & UI**
- **UPDATED**: Bootstrap 4 → Bootstrap 5 migration
- **UPDATED**: Component styling for Bootstrap 5 compatibility
- **UPDATED**: Badge classes (`badge-danger` → `badge bg-danger`)
- **UPDATED**: Modern CSS utility classes

#### **Development Experience**
- **IMPROVED**: Faster development with Vite
- **IMPROVED**: Better error messages and debugging
- **IMPROVED**: Modern IDE support and IntelliSense
- **IMPROVED**: Consistent code formatting

### 🛠️ **Fixed**

#### **Security & Vulnerabilities**
- **FIXED**: All 21 security vulnerabilities resolved
- **FIXED**: Updated all dependencies to secure versions
- **FIXED**: Removed deprecated and insecure packages

#### **Visual & UX Issues**
- **FIXED**: Chart display issues on Analytics page
- **FIXED**: Data Statistics widget icon alignment
- **FIXED**: Sidebar icons missing or misaligned
- **FIXED**: Mobile responsiveness issues
- **FIXED**: FontAwesome icon loading problems
- **FIXED**: Header component spacing and layout inconsistencies
- **FIXED**: Profile section container padding issues causing gaps
- **FIXED**: BootstrapVueNext tooltip integration and functionality

#### **Performance Issues**
- **FIXED**: Bundle size optimization
- **FIXED**: Tree-shaking for unused code elimination
- **FIXED**: Optimized FontAwesome integration
- **FIXED**: Improved build performance

#### **Compatibility Issues**
- **FIXED**: Vue 3 compatibility across all components
- **FIXED**: Bootstrap 5 component compatibility
- **FIXED**: Modern browser support
- **FIXED**: ESLint configuration for Vue 3

### 🗑️ **Removed**

#### **Deprecated Dependencies**
- **REMOVED**: Vue 2.6 and related packages
- **REMOVED**: Vue CLI and webpack configuration
- **REMOVED**: BootstrapVue (replaced with BootstrapVueNext)
- **REMOVED**: Vuex (replaced with Pinia)
- **REMOVED**: vue-perfect-scrollbar (Vue 3 compatibility issues)
- **REMOVED**: Legacy FontAwesome integration

#### **Insecure Packages**
- **REMOVED**: 21 vulnerable dependencies
- **REMOVED**: Deprecated Node.js packages
- **REMOVED**: Legacy build tools and configurations

### 📊 **Migration Impact**

#### **Before (Vue 2.6)**
- ❌ 21 security vulnerabilities
- ❌ Vue CLI build system
- ❌ Bootstrap 4 with BootstrapVue
- ❌ Chart.js 3.x with compatibility issues
- ❌ Vuex for state management
- ❌ Legacy FontAwesome integration

#### **After (Vue 3.5.17)**
- ✅ 0 security vulnerabilities
- ✅ Vite build system
- ✅ Bootstrap 5 with BootstrapVueNext
- ✅ Chart.js 4.x with modern API
- ✅ Pinia for state management
- ✅ Tree-shaking optimized FontAwesome

### 🎯 **Performance Improvements**

- **Build Time**: 60%+ faster with Vite
- **Bundle Size**: Significant reduction with tree-shaking
- **FontAwesome**: 92% size reduction (1MB+ → 88KB)
- **Development**: Hot Module Replacement for instant updates
- **Production**: Optimized builds with modern browser targets

### 🔧 **Technical Details**

#### **New File Structure**
```
src/
├── components/          # NEW: Reusable Vue 3 components
├── stores/             # NEW: Pinia store modules
├── DemoPages/          # Updated: Vue 3 components
├── Layout/             # Updated: Composition API
└── assets/            # Updated: Bootstrap 5 styles
```

#### **Updated Scripts**
```json
{
  "serve": "vite",           // NEW: Vite dev server
  "build": "vite build",     // NEW: Vite production build
  "preview": "vite preview", // NEW: Preview production build
  "lint": "eslint . --ext .vue,.js,.jsx,.ts,.tsx --fix"
}
```

#### **Browser Support**
- **Modern browsers** (ES2020+ support)
- **Chrome 90+**, **Firefox 88+**, **Safari 14+**, **Edge 90+**
- **No IE support** (Vue 3 requirement)

### 📚 **Documentation Updates**

- **UPDATED**: README.md with Vue 3 modernization details
- **UPDATED**: CLAUDE.md with new architecture and patterns
- **NEW**: CHANGELOG.md documenting all changes
- **NEW**: Component usage examples and patterns
- **NEW**: Store integration documentation

### 🤝 **Developer Experience**

#### **What Developers Get**
- **Modern Vue 3** with Composition API
- **Zero vulnerabilities** for secure applications
- **Fast development** with Vite and HMR
- **Better tooling** with ESLint and modern JavaScript
- **Reusable components** with proper architecture
- **State management** with Pinia
- **TypeScript-ready** structure
- **Production-ready** code

#### **Migration Benefits**
- **Future-proof** with Vue 3 ecosystem
- **Performance optimized** builds
- **Security enhanced** with zero vulnerabilities
- **Developer friendly** with modern tooling
- **Maintainable** with better architecture

---

## **🎉 Ready for Production**

This Vue 3 modernized version provides developers with a **complete, secure, and performant** foundation for building modern admin dashboards and web applications.

**Start building with confidence!** 🚀

---

## Previous Versions

### [2.x.x] - Legacy Vue 2 Version
- Vue 2.6 with Vue CLI
- Bootstrap 4 with BootstrapVue
- Vuex for state management
- Multiple security vulnerabilities
- Legacy build tooling

**Note**: Vue 2 version is deprecated and no longer maintained. Please use Vue 3 version for all new projects.