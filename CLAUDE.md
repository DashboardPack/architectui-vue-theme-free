# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is ArchitectUI Vue Free, a **Vue.js 3.5.17** admin dashboard template built with **Bootstrap 5** and **BootstrapVueNext**. It's a professional admin template with a comprehensive set of UI components, forms, charts, and layout options that has been **completely modernized** to Vue 3 with zero vulnerabilities.

## 🚀 **Vue 3 Modernization Status: COMPLETE**

This project has been **fully migrated and modernized** with:

### ✅ **Completed Modernization**
- **Zero Vulnerabilities**: Migrated from 21 vulnerabilities to 0
- **Vue 3.5.17**: Latest Vue 3 with full Composition API implementation
- **Pinia 3.x**: Modern state management replacing Vuex
- **Vite 7.x**: Fast build system replacing Vue CLI
- **Bootstrap 5**: Updated from Bootstrap 4
- **Chart.js 4.x**: Modern chart API implementation
- **FontAwesome Vue 3**: Tree-shaking optimized icon integration
- **ESLint 9.x**: Modern code quality tooling

### 🏪 **Pinia Store Architecture**
- **Dashboard Store** (`/src/stores/dashboard.js`): Analytics data, statistics, todos, timeline
- **UI Store** (`/src/stores/ui.js`): Sidebar state, theme management, mobile responsiveness
- **Notifications Store** (`/src/stores/notifications.js`): System messages and alerts
- **Centralized Export** (`/src/stores/index.js`): Store configuration and exports

### 🎨 **Vue 3 Component Patterns**
- **Composition API**: All key components use `<script setup>` or `setup()` function
- **defineComponent**: TypeScript-ready component definitions
- **Reactive State**: `ref()`, `computed()`, `reactive()` patterns
- **Lifecycle Hooks**: `onMounted()`, `onUnmounted()`, `watch()` usage
- **Store Integration**: Proper Pinia store consumption patterns

## Development Commands

- `npm run serve` - Start Vite development server (http://localhost:8080)
- `npm run build` - Build for production with Vite
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint linter

## Architecture & Structure

### Core Framework Stack
- **Vue.js 3.5.17** with Vite build system
- **Pinia 3.x** for state management
- **Vue Router 4.x** for routing
- **Bootstrap 5** with BootstrapVueNext components
- **Vite** for build tooling (replaces Vue CLI)
- **SASS/SCSS** for styling
- **FontAwesome 6.x** and **Pe7-icon** for icons
- **Chart.js 4.x** with vue-chartjs for charts

### Layout System
The application uses a dynamic layout system with two main layouts:
- `default-layout` (baseLayout.vue) - Main dashboard layout with header, sidebar, and footer
- `userpages-layout` (pagesLayout.vue) - Simplified layout for login/register pages

Layout is determined by the `meta.layout` property in route definitions. If no layout is specified, `default-layout` is used.

### Directory Structure
- `/src/components/` - **NEW**: Reusable Vue 3 components
  - `DashboardWidget.vue` - Reusable widget component with Pinia integration
  - `StoreDemo.vue` - Demonstrates Pinia store usage patterns
- `/src/stores/` - **NEW**: Pinia store modules
  - `dashboard.js` - Analytics and dashboard data management
  - `ui.js` - UI state, theme, and sidebar management
  - `notifications.js` - System notifications and alerts
  - `index.js` - Store configuration and exports
- `/src/DemoPages/` - Contains all demo pages organized by category:
  - `Dashboards/` - Dashboard pages (Analytics with Vue 3 + Pinia)
  - `UserPages/` - Authentication pages (Login, Register, Forgot Password)
  - `Elements/` - UI elements (Buttons, Cards, Icons, etc.)
  - `Components/` - Interactive components (Modals, Tabs, Accordions, etc.)
  - `Forms/` - Form components and layouts
  - `Tables/` - Table components
  - `Charts/` - Chart components (Chart.js 4.x)
  - `Widgets/` - Dashboard widgets
- `/src/Layout/` - Layout components and wrappers (Vue 3 Composition API)
- `/src/assets/` - SCSS styles organized by component type

### Styling Architecture
- **Bootstrap 5** with modern utility classes
- Custom theme variables in `/src/assets/themes/`
- Modular SCSS structure with components, layout, and utility styles
- Responsive design with sidebar that collapses on smaller screens
- Theme system supporting multiple color schemes
- **CSS Grid** and **Flexbox** modern layout patterns

### Component Patterns
- **Vue 3 Composition API** throughout key components
- **defineComponent** for better TypeScript support
- **Pinia store integration** for state management
- **Reusable components** with proper prop validation
- **Tree-shaking optimized** imports
- **Single File Components** (.vue) with `<script setup>` syntax
- **Bootstrap 5** components via BootstrapVueNext
- **FontAwesome Vue 3** with tree-shaking optimization

### State Management with Pinia
- **Dashboard Store**: Manages analytics data, statistics, todos, and timeline events
- **UI Store**: Handles sidebar state, theme preferences, mobile responsiveness
- **Notifications Store**: Manages system messages, alerts, and user notifications
- **Persistent Storage**: LocalStorage integration for user preferences
- **Reactive Updates**: Automatic component re-rendering on state changes

### Navigation
The sidebar menu is defined in `Sidebar.vue` with Vue 3 Composition API and supports:
- **Pinia store integration** for state management
- Nested menu items with reactive state
- Headers/sections with proper organization
- Icon support (Pe7-icon classes)
- Responsive behavior with hover states
- **Mobile-first** collapsible design

## Key Dependencies

### Core Dependencies
- `vue` (3.5.17) - Vue 3 framework
- `pinia` (3.x) - Vue 3 state management
- `vue-router` (4.x) - Vue 3 routing
- `vite` (7.x) - Build tool and dev server

### UI & Styling
- `bootstrap` (5.x) - CSS framework
- `bootstrap-vue-next` - Bootstrap 5 components for Vue 3
- `sass` - CSS preprocessor

### Charts & Visualization
- `chart.js` (4.x) - Chart library
- `vue-chartjs` (5.x) - Vue 3 Chart.js wrapper

### Icons
- `@fortawesome/vue-fontawesome` (3.x) - FontAwesome for Vue 3
- `@fortawesome/fontawesome-svg-core` - FontAwesome core
- `@fortawesome/free-solid-svg-icons` - FontAwesome solid icons

### Development Tools
- `eslint` (9.x) - Code linting
- `@vitejs/plugin-vue` - Vite Vue 3 plugin

## Development Notes

### Vue 3 Specific
- **This is a Vue 3.5.17 project** with full Composition API support
- Uses **Vite** for fast development and optimized builds
- **Pinia** is used for state management (not Vuex)
- **Bootstrap 5** with BootstrapVueNext (not BootstrapVue)
- **Chart.js 4.x** with modern API usage
- **FontAwesome Vue 3** with tree-shaking optimization

### Build System
- **Vite** replaces Vue CLI for faster development
- **Hot Module Replacement** for instant updates
- **Tree-shaking** for optimized bundle sizes
- **ES modules** for modern JavaScript
- **Source maps** enabled in development

### Code Quality
- **ESLint 9.x** with Vue 3 specific rules
- **Modern JavaScript** (ES2020+) syntax
- **TypeScript-ready** component structure
- **Consistent code formatting** with automated fixes

### Performance Optimizations
- **Tree-shaking**: Only bundle used code
- **Code splitting**: Lazy-loaded routes
- **Optimized builds**: Vite production optimization
- **Modern browser targets**: ES2020+ support

## Store Usage Patterns

### Dashboard Store Example
```javascript
// In a component
import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()

// Access reactive data
const stats = dashboardStore.stats
const totalRevenue = dashboardStore.totalRevenue

// Call actions
dashboardStore.refreshDashboard()
dashboardStore.addTodoTask(task)
```

### UI Store Example
```javascript
// In a component
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()

// Access reactive state
const sidebarCollapsed = uiStore.sidebarCollapsed
const currentTheme = uiStore.theme

// Call actions
uiStore.toggleSidebar()
uiStore.setTheme('dark')
```

### Component Integration Example
```vue
<script setup>
import { useDashboardStore } from '@/stores/dashboard'
import { useUIStore } from '@/stores/ui'

const dashboardStore = useDashboardStore()
const uiStore = useUIStore()

// Reactive data is automatically available
</script>

<template>
  <div>
    <h1>{{ dashboardStore.pageTitle }}</h1>
    <button @click="uiStore.toggleSidebar()">
      Toggle Sidebar
    </button>
  </div>
</template>
```

## Browser Support
- **Modern browsers** (ES2020+ support)
- **Chrome 90+**, **Firefox 88+**, **Safari 14+**, **Edge 90+**
- **Mobile browsers** with modern JavaScript support
- **No IE support** (Vue 3 requirement)

## Migration Notes
This project was successfully migrated from Vue 2.6 to Vue 3.5.17 with:
- ✅ All components updated to Vue 3 Composition API
- ✅ Vuex replaced with Pinia
- ✅ Vue CLI replaced with Vite
- ✅ Bootstrap 4 upgraded to Bootstrap 5
- ✅ All dependencies updated to latest secure versions
- ✅ Zero vulnerabilities achieved
- ✅ Modern development tooling implemented