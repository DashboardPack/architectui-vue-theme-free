// Global type definitions for ArchitectUI Vue

declare global {
  interface Window {
    google?: Record<string, unknown>
    // Add other global window properties as needed
  }
}

// FontAwesome icon types
declare module '@fortawesome/fontawesome-svg-core' {
  export interface IconDefinition {
    prefix: string
    iconName: string
    icon: [number, number, string[], string, string]
  }
}

// Vue Router meta types
declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    requiresAuth?: boolean
    title?: string
    icon?: string
  }
}

// Chart.js types
declare module 'chart.js' {
  interface ChartConfiguration {
    type: string
    data: Record<string, unknown>
    options?: Record<string, unknown>
  }
}

// Perfect Scrollbar types
declare module 'vue3-perfect-scrollbar' {
  import { App } from 'vue'
  export function install(app: App): void
  export const PerfectScrollbar: Record<string, unknown>
}

// Pinia store types
export interface UIState {
  sidebarCollapsed: boolean
  theme: 'light' | 'dark'
  activeMenus: Record<string, boolean>
  isMobile: boolean
}

export interface DashboardState {
  widgets: Record<string, Record<string, unknown>>
  charts: Record<string, Record<string, unknown>>
  loading: boolean
}

export interface NotificationsState {
  notifications: Notification[]
  unreadCount: number
}

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  timestamp: number
  read: boolean
}

export {}
