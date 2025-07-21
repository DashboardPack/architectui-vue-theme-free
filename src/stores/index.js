/**
 * Pinia Store Index
 * Centralized store exports for the ArchitectUI Vue template
 */

import { createPinia } from 'pinia'

// Store imports
import { useDashboardStore } from './dashboard'
import { useUIStore } from './ui'
import { useNotificationsStore } from './notifications'
import { useSidebarStore } from './sidebar'

// Create pinia instance
const pinia = createPinia()

// Enable Pinia devtools in development
if (process.env.NODE_ENV === 'development') {
  pinia.use(({ store }) => {
    store.$id = store.$id || 'Unknown Store'
  })
}

// Export stores for easy importing
export { useDashboardStore, useUIStore, useNotificationsStore, useSidebarStore }

export default pinia
