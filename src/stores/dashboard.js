/**
 * Dashboard Store
 * Manages dashboard data, analytics, and statistics
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDashboardStore = defineStore('dashboard', () => {
  // ===== STATE =====

  // Dashboard statistics
  const stats = ref({
    cashDeposits: {
      value: '1,7M',
      change: -54.1,
      label: 'Cash Deposits',
      sublabel: 'less earnings'
    },
    investedDividends: {
      value: '9M',
      change: -14.1,
      label: 'Invested Dividends',
      sublabel: 'Grow Rate'
    },
    capitalGains: {
      value: '$563',
      change: 7.35,
      label: 'Capital Gains',
      sublabel: 'Increased by'
    }
  })

  // Technical support tickets
  const supportTickets = ref({
    total: 34,
    change: 5,
    trend: 'up'
  })

  // Chart data for dashboard
  const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Helpdesk Tickets',
        data: [65, 59, 80, 81, 46, 55, 38, 59],
        fill: true,
        tension: 0.5,
        backgroundColor: 'rgba(247, 185, 36, 0.2)',
        borderColor: '#f7b924',
        borderWidth: 4,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#f7b924',
        pointBorderWidth: 5,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#f7b924'
      }
    ]
  })

  // Sales progress data
  const salesProgress = ref([
    {
      id: 1,
      title: 'Total Orders',
      subtitle: 'Last year expenses',
      value: 1896,
      progress: 43,
      color: 'success'
    },
    {
      id: 2,
      title: 'Clients',
      subtitle: 'Total Clients Profit',
      value: '$12.6k',
      progress: 67,
      color: 'primary'
    },
    {
      id: 3,
      title: 'Followers',
      subtitle: 'People Interested',
      value: '45,9%',
      progress: 89,
      color: 'danger'
    },
    {
      id: 4,
      title: 'Products Sold',
      subtitle: 'Total revenue streams',
      value: '$3M',
      progress: 76,
      color: 'warning'
    }
  ])

  // Widget cards data
  const widgetCards = ref([
    {
      id: 1,
      value: 874,
      label: 'sales last month',
      color: 'success',
      prefix: '$'
    },
    {
      id: 2,
      value: 1283,
      label: 'sales Income',
      color: 'primary',
      prefix: '$'
    },
    {
      id: 3,
      value: 1286,
      label: 'last month sales',
      color: 'warning',
      prefix: '$'
    },
    {
      id: 4,
      value: 564,
      label: 'total revenue',
      color: 'danger',
      prefix: '$'
    }
  ])

  // Todo tasks
  const todoTasks = ref([
    {
      id: 1,
      title: 'Wash the car',
      description: 'Written by Bob',
      completed: false,
      priority: 'warning',
      status: 'Rejected'
    },
    {
      id: 2,
      title: 'Task with hover dropdown menu',
      description: 'By Johnny',
      completed: false,
      priority: 'info',
      status: 'NEW'
    },
    {
      id: 3,
      title: 'Badge on the right task',
      description: 'This task has show on hover actions!',
      completed: false,
      priority: 'primary',
      status: 'Latest Task'
    },
    {
      id: 4,
      title: 'Go grocery shopping',
      description: 'A short description for this todo item',
      completed: false,
      priority: 'info',
      avatar: '/src/assets/images/avatars/1.jpg'
    },
    {
      id: 5,
      title: 'Development Task',
      description: 'Finish Vue ToDo List App',
      completed: false,
      priority: 'success',
      badge: 69
    }
  ])

  // Timeline events
  const timelineEvents = ref([
    {
      id: 1,
      title: 'All Hands Meeting',
      type: 'danger',
      timestamp: new Date('2024-01-15 14:00'),
      description: 'Team meeting scheduled'
    },
    {
      id: 2,
      title: 'Build the production release',
      type: 'success',
      timestamp: new Date('2024-01-15 15:00'),
      description: 'Production deployment',
      badge: 'NEW'
    },
    {
      id: 3,
      title: 'Something not important',
      type: 'primary',
      timestamp: new Date('2024-01-15 16:00'),
      description: 'Minor task'
    }
  ])

  // Loading states
  const isLoading = ref(false)
  const lastUpdated = ref(Date.now())

  // ===== COMPUTED =====

  // Get statistics with trend indicators
  const statsWithTrends = computed(() => {
    return Object.entries(stats.value).map(([key, stat]) => ({
      key,
      ...stat,
      trendIcon: stat.change > 0 ? 'angle-up' : 'angle-down',
      trendColor: stat.change > 0 ? 'text-success' : 'text-danger',
      formattedChange: `${Math.abs(stat.change)}%`
    }))
  })

  // Get pending tasks count
  const pendingTasksCount = computed(() => {
    return todoTasks.value.filter(task => !task.completed).length
  })

  // Get total revenue from widget cards
  const totalRevenue = computed(() => {
    return widgetCards.value.reduce((sum, card) => sum + card.value, 0)
  })

  // Get recent timeline events (last 24 hours)
  const recentTimelineEvents = computed(() => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    return timelineEvents.value.filter(event => event.timestamp > yesterday)
  })

  // ===== ACTIONS =====

  // Update dashboard statistics
  const updateStats = async newStats => {
    isLoading.value = true
    try {
      if (newStats) {
        stats.value = { ...stats.value, ...newStats }
      }
      lastUpdated.value = Date.now()
    } finally {
      isLoading.value = false
    }
  }

  // Update chart data
  const updateChartData = async newChartData => {
    isLoading.value = true
    try {
      if (newChartData) {
        chartData.value = { ...chartData.value, ...newChartData }
      }
      lastUpdated.value = Date.now()
    } finally {
      isLoading.value = false
    }
  }

  // Add new todo task
  const addTodoTask = task => {
    const newTask = {
      id: Date.now(),
      completed: false,
      priority: 'info',
      ...task
    }
    todoTasks.value.push(newTask)
  }

  // Toggle todo task completion
  const toggleTodoTask = taskId => {
    const task = todoTasks.value.find(t => t.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }

  // Remove todo task
  const removeTodoTask = taskId => {
    const index = todoTasks.value.findIndex(t => t.id === taskId)
    if (index > -1) {
      todoTasks.value.splice(index, 1)
    }
  }

  // Add timeline event
  const addTimelineEvent = event => {
    const newEvent = {
      id: Date.now(),
      timestamp: new Date(),
      type: 'info',
      ...event
    }
    timelineEvents.value.unshift(newEvent)
  }

  // Refresh all dashboard data
  const refreshDashboard = async () => {
    isLoading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Update timestamps
      lastUpdated.value = Date.now()

      // In a real app, you would fetch data from API here
      // const response = await fetch('/api/dashboard')
      // const data = await response.json()
      // stats.value = data.stats
      // chartData.value = data.chartData
    } finally {
      isLoading.value = false
    }
  }

  // Export store state and actions
  return {
    // State
    stats,
    supportTickets,
    chartData,
    salesProgress,
    widgetCards,
    todoTasks,
    timelineEvents,
    isLoading,
    lastUpdated,

    // Computed
    statsWithTrends,
    pendingTasksCount,
    totalRevenue,
    recentTimelineEvents,

    // Actions
    updateStats,
    updateChartData,
    addTodoTask,
    toggleTodoTask,
    removeTodoTask,
    addTimelineEvent,
    refreshDashboard
  }
})
