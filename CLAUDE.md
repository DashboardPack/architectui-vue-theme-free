# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ArchitectUI Vue Free - a Vue 3 admin dashboard template built with Bootstrap 5 and BootstrapVueNext. Uses Pinia for state management, Vite for builds, and Chart.js for visualizations.

## Development Commands

```bash
npm run serve          # Start dev server (http://localhost:8087)
npm run build          # Production build (runs type-check first)
npm run preview        # Preview production build
npm run lint           # Run ESLint with auto-fix
npm run format         # Format code with Prettier
npm run format:check   # Check formatting without changes
npm run type-check     # Run TypeScript type checking
npm run test           # Run tests in watch mode
npm run test:run       # Run tests once
npm run test:coverage  # Run tests with coverage report
```

## Architecture

### Layout System

The app uses dynamic layouts determined by route `meta.layout` property:

- **`default-layout`** ([baseLayout.vue](src/Layout/Wrappers/baseLayout.vue)) - Main dashboard with header, sidebar, footer
- **`userpages-layout`** ([pagesLayout.vue](src/Layout/Wrappers/pagesLayout.vue)) - Minimal layout for auth pages

Routes without `meta.layout` default to `default-layout`. Example:

```javascript
// Uses default-layout (dashboard)
{ path: '/', component: () => import('../DemoPages/Dashboards/Analytics.vue') }

// Uses userpages-layout (auth pages)
{ path: '/pages/login-boxed', meta: { layout: 'userpages' }, component: ... }
```

The layout switching happens in [App.vue](src/App.vue) via a computed property that resolves `layout + '-layout'`.

### State Management (Pinia)

Stores in `/src/stores/`:

- **`dashboard.js`** - Analytics data, statistics, todos, timeline
- **`ui.js`** - Sidebar state, theme, mobile responsiveness, page title
- **`notifications.js`** - System messages and alerts
- **`sidebar.js`** - Sidebar-specific state

Usage:
```javascript
import { useDashboardStore } from '@/stores/dashboard'
import { useUIStore } from '@/stores/ui'

const dashboardStore = useDashboardStore()
const uiStore = useUIStore()

// Access state
dashboardStore.stats
uiStore.sidebarCollapsed

// Actions
uiStore.toggleSidebar()
uiStore.setTheme('dark')
```

### Component Registration

BootstrapVueNext components are registered globally in [main.js](src/main.js) with kebab-case names (e.g., `<b-button>`, `<b-modal>`). FontAwesome icons use `<font-awesome-icon>` with icons registered in the library.

### Build Configuration

- **Vite config**: [vite.config.ts](vite.config.ts) - Includes manual chunk splitting for vendor, bootstrap, charts, and icons
- **Vitest config**: [vitest.config.ts](vitest.config.ts) - Test setup with jsdom environment
- **Production base path**: `/architectui-vue-free/` (for GitHub Pages deployment)

### Key Directories

- `/src/DemoPages/` - All demo pages organized by category (Dashboards, Elements, Components, Forms, Tables, Charts, Widgets, UserPages)
- `/src/Layout/Components/` - Header, Sidebar, Footer components
- `/src/assets/` - SCSS styles and themes
- `/tests/` - Test files with setup in `tests/setup.ts`

### Icons

Two icon systems are used:

- **FontAwesome** - Via `<font-awesome-icon :icon="['fas', 'icon-name']" />`. Icons must be imported and added to library in main.js
- **Pe7-icon** - CSS class-based icons (e.g., `pe-7s-rocket`)

### Styling

SCSS with Bootstrap 5. Entry point is `/src/assets/base.scss`. Theme colors use primary green `#69aa8a`.
