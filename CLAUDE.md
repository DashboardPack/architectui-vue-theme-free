# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is ArchitectUI Vue Free, a Vue.js 2.6 admin dashboard template built with Bootstrap 4 and BootstrapVue. It's a professional admin template with a comprehensive set of UI components, forms, charts, and layout options.

## Development Commands

- `npm run serve` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint linter

## Architecture & Structure

### Core Framework Stack
- **Vue.js 2.6** with Vue CLI
- **Vue Router** for routing
- **BootstrapVue** for UI components
- **SASS/SCSS** for styling
- **FontAwesome** and **Pe7-icon** for icons
- **Chart.js** with vue-chartjs for charts

### Layout System
The application uses a dynamic layout system with two main layouts:
- `default-layout` (baseLayout.vue) - Main dashboard layout with header, sidebar, and footer
- `userpages-layout` (pagesLayout.vue) - Simplified layout for login/register pages

Layout is determined by the `meta.layout` property in route definitions. If no layout is specified, `default-layout` is used.

### Directory Structure
- `/src/DemoPages/` - Contains all demo pages organized by category:
  - `Dashboards/` - Dashboard pages (Analytics)
  - `UserPages/` - Authentication pages (Login, Register, Forgot Password)
  - `Elements/` - UI elements (Buttons, Cards, Icons, etc.)
  - `Components/` - Interactive components (Modals, Tabs, Accordions, etc.)
  - `Forms/` - Form components and layouts
  - `Tables/` - Table components
  - `Charts/` - Chart components
  - `Widgets/` - Dashboard widgets
- `/src/Layout/` - Layout components and wrappers
- `/src/assets/` - SCSS styles organized by component type

### Styling Architecture
- Custom Bootstrap 4 build with theme variables in `/src/assets/themes/`
- Modular SCSS structure with components, layout, and utility styles
- Responsive design with sidebar that collapses on smaller screens
- Theme system supporting multiple color schemes

### Component Patterns
- Vue single-file components (.vue)
- Lazy-loaded routes using dynamic imports
- Bootstrap Vue components throughout
- Perfect Scrollbar integration for custom scrollbars
- FontAwesome icons with tree-shaking

### Navigation
The sidebar menu is defined as a JavaScript object in `Sidebar.vue` and supports:
- Nested menu items
- Headers/sections
- Icon support (Pe7-icon classes)
- Responsive behavior with hover states

## Key Dependencies
- `bootstrap-vue` - Bootstrap 4 components for Vue
- `vue-sidebar-menu` - Sidebar navigation component
- `vue-perfect-scrollbar` - Custom scrollbar implementation
- `vue-chartjs` - Chart.js wrapper for Vue
- `vue2-google-maps` - Google Maps integration
- `animate-sass` - CSS animations

## Development Notes
- This is a Vue 2.x project, not Vue 3
- Uses Vue CLI with Babel and ESLint
- Production builds disable source maps
- Runtime template compilation is enabled
- Targets modern browsers (> 1%, last 2 versions, not IE <= 8)