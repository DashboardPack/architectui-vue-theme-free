/**
 * Notifications Store
 * Manages system notifications, alerts, and user messages
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotificationsStore = defineStore('notifications', () => {
  // ===== STATE =====

  // Active notifications
  const notifications = ref([])

  // Notification settings
  const settings = ref({
    maxNotifications: 5,
    defaultDuration: 5000,
    showToasts: true,
    soundEnabled: true,
    position: 'top-right'
  })

  // Notification templates
  const templates = ref({
    success: {
      icon: 'check-circle',
      bgColor: 'bg-success',
      textColor: 'text-white',
      duration: 4000
    },
    error: {
      icon: 'exclamation-circle',
      bgColor: 'bg-danger',
      textColor: 'text-white',
      duration: 6000
    },
    warning: {
      icon: 'exclamation-triangle',
      bgColor: 'bg-warning',
      textColor: 'text-dark',
      duration: 5000
    },
    info: {
      icon: 'info-circle',
      bgColor: 'bg-info',
      textColor: 'text-white',
      duration: 5000
    }
  })

  // ===== COMPUTED =====

  // Get notifications by type
  const notificationsByType = computed(() => {
    return {
      success: notifications.value.filter(n => n.type === 'success'),
      error: notifications.value.filter(n => n.type === 'error'),
      warning: notifications.value.filter(n => n.type === 'warning'),
      info: notifications.value.filter(n => n.type === 'info')
    }
  })

  // Get unread notifications count
  const unreadCount = computed(() => {
    return notifications.value.filter(n => !n.read).length
  })

  // Get recent notifications (last 24 hours)
  const recentNotifications = computed(() => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    return notifications.value.filter(n => n.timestamp > yesterday)
  })

  // Get persistent notifications (those that don't auto-dismiss)
  const persistentNotifications = computed(() => {
    return notifications.value.filter(n => n.persistent)
  })

  // ===== ACTIONS =====

  // Add a new notification
  const addNotification = notification => {
    const template = templates.value[notification.type] || templates.value.info

    const newNotification = {
      id: Date.now() + Math.random(),
      timestamp: new Date(),
      read: false,
      persistent: false,
      duration: settings.value.defaultDuration,
      ...template,
      ...notification
    }

    // Add to beginning of array
    notifications.value.unshift(newNotification)

    // Limit total notifications
    if (notifications.value.length > settings.value.maxNotifications) {
      notifications.value = notifications.value.slice(0, settings.value.maxNotifications)
    }

    // Auto-dismiss if not persistent
    if (!newNotification.persistent && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(newNotification.id)
      }, newNotification.duration)
    }

    return newNotification.id
  }

  // Remove notification by ID
  const removeNotification = id => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  // Mark notification as read
  const markAsRead = id => {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  // Mark all notifications as read
  const markAllAsRead = () => {
    notifications.value.forEach(notification => {
      notification.read = true
    })
  }

  // Clear all notifications
  const clearAll = () => {
    notifications.value = []
  }

  // Clear notifications by type
  const clearByType = type => {
    notifications.value = notifications.value.filter(n => n.type !== type)
  }

  // Convenience methods for common notification types
  const success = (message, options = {}) => {
    return addNotification({
      type: 'success',
      message,
      ...options
    })
  }

  const error = (message, options = {}) => {
    return addNotification({
      type: 'error',
      message,
      persistent: true, // Errors should be persistent by default
      ...options
    })
  }

  const warning = (message, options = {}) => {
    return addNotification({
      type: 'warning',
      message,
      ...options
    })
  }

  const info = (message, options = {}) => {
    return addNotification({
      type: 'info',
      message,
      ...options
    })
  }

  // Update settings
  const updateSettings = newSettings => {
    settings.value = { ...settings.value, ...newSettings }
    localStorage.setItem('notificationSettings', JSON.stringify(settings.value))
  }

  // Initialize from localStorage
  const initializeFromStorage = () => {
    try {
      const savedSettings = localStorage.getItem('notificationSettings')
      if (savedSettings) {
        settings.value = { ...settings.value, ...JSON.parse(savedSettings) }
      }
    } catch (error) {
      console.warn('Failed to load notification settings:', error)
    }
  }

  // Notification examples for demo purposes
  const showDemoNotifications = () => {
    success('Dashboard data updated successfully!', {
      title: 'Success',
      duration: 3000
    })

    setTimeout(() => {
      warning('Your session will expire in 5 minutes', {
        title: 'Session Warning',
        duration: 4000
      })
    }, 1000)

    setTimeout(() => {
      info('New features available in the latest update', {
        title: 'Information',
        duration: 5000
      })
    }, 2000)
  }

  // Export store state and actions
  return {
    // State
    notifications,
    settings,
    templates,

    // Computed
    notificationsByType,
    unreadCount,
    recentNotifications,
    persistentNotifications,

    // Actions
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
    clearByType,
    success,
    error,
    warning,
    info,
    updateSettings,
    initializeFromStorage,
    showDemoNotifications
  }
})
