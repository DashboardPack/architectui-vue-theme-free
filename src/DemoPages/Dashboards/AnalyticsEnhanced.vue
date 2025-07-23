<template>
  <div class="analytics-enhanced">
    <!-- Page Header with Gradient Background -->
    <div class="page-header-wrapper mb-4">
      <div class="page-header-gradient">
        <page-title :heading="heading" :subheading="subheading" :icon="icon" class="text-white mb-0" />

        <!-- Quick Stats Summary -->
        <div class="row g-3 mt-3">
          <div class="col-6 col-md-3" v-for="stat in quickStats" :key="stat.id">
            <div class="quick-stat-card">
              <div class="d-flex align-items-start">
                <div class="stat-content flex-grow-1">
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                  <div class="stat-trend mt-2">
                    <span :class="stat.trending === 'up' ? 'text-success' : 'text-danger'">
                      <font-awesome-icon :icon="stat.trending === 'up' ? 'arrow-up' : 'arrow-down'" />
                      {{ stat.change }}%
                    </span>
                    <span class="text-white-50 ms-1">vs last month</span>
                  </div>
                </div>
                <div class="stat-icon-wrapper ms-3" :style="`background: ${stat.gradient}`">
                  <font-awesome-icon :icon="stat.icon" class="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Content -->
    <div class="row g-4">
      <!-- Revenue Overview Card -->
      <div class="col-lg-8">
        <div class="main-card mb-3 card shadow-sm border-0">
          <div class="card-header-tab card-header py-3">
            <div class="card-header-title">
              <i class="header-icon lnr-chart-bars icon-gradient bg-happy-green me-2"></i>
              Revenue Overview
            </div>
            <div class="btn-actions-pane-right">
              <b-button-group size="sm">
                <b-button
                  v-for="period in ['Day', 'Week', 'Month', 'Year']"
                  :key="period"
                  :variant="selectedPeriod === period ? 'success' : 'outline-success'"
                  @click="selectedPeriod = period"
                >
                  {{ period }}
                </b-button>
              </b-button-group>
            </div>
          </div>
          <div class="card-body">
            <line-chart-component :data="revenueChartData" :options="revenueChartOptions" :height="300" />

            <!-- Revenue Stats Grid -->
            <div class="row text-center mt-4">
              <div class="col-4">
                <div class="revenue-stat">
                  <h5 class="mb-1 text-success">$48,965</h5>
                  <small class="text-muted">Total Revenue</small>
                </div>
              </div>
              <div class="col-4">
                <div class="revenue-stat">
                  <h5 class="mb-1 text-primary">2,415</h5>
                  <small class="text-muted">New Customers</small>
                </div>
              </div>
              <div class="col-4">
                <div class="revenue-stat">
                  <h5 class="mb-1 text-info">$20.25</h5>
                  <small class="text-muted">Avg. Order Value</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity & Performance -->
      <div class="col-lg-4">
        <!-- Performance Score -->
        <div class="main-card mb-3 card shadow-sm border-0">
          <div class="card-body">
            <h6 class="card-title mb-4">Performance Score</h6>
            <div class="performance-score-wrapper text-center">
              <div class="score-circle mb-3 position-relative">
                <doughnut-chart-component
                  :data="performanceScoreData"
                  :options="performanceScoreOptions"
                  :height="180"
                />
                <div class="score-overlay">
                  <h2 class="mb-0 text-success">92</h2>
                  <small class="text-muted">Excellent</small>
                </div>
              </div>

              <div class="performance-metrics">
                <div class="metric-item d-flex justify-content-between align-items-center py-2">
                  <span class="text-muted">Efficiency</span>
                  <div class="progress flex-grow-1 mx-3" style="height: 6px">
                    <div class="progress-bar bg-success" style="width: 88%"></div>
                  </div>
                  <span class="fw-bold">88%</span>
                </div>
                <div class="metric-item d-flex justify-content-between align-items-center py-2">
                  <span class="text-muted">Quality</span>
                  <div class="progress flex-grow-1 mx-3" style="height: 6px">
                    <div class="progress-bar bg-info" style="width: 95%"></div>
                  </div>
                  <span class="fw-bold">95%</span>
                </div>
                <div class="metric-item d-flex justify-content-between align-items-center py-2">
                  <span class="text-muted">Satisfaction</span>
                  <div class="progress flex-grow-1 mx-3" style="height: 6px">
                    <div class="progress-bar bg-warning" style="width: 78%"></div>
                  </div>
                  <span class="fw-bold">78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="main-card card shadow-sm border-0">
          <div class="card-header py-3">
            <div class="card-header-title">
              <i class="header-icon lnr-pulse me-2"></i>
              Recent Activity
            </div>
          </div>
          <div class="card-body p-0">
            <div class="activity-feed">
              <div class="activity-item" v-for="activity in recentActivities" :key="activity.id">
                <div class="activity-icon" :class="`bg-${activity.type}`">
                  <font-awesome-icon :icon="activity.icon" class="text-white" />
                </div>
                <div class="activity-content">
                  <p class="mb-1">{{ activity.description }}</p>
                  <small class="text-muted">{{ activity.time }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row g-4 mt-1">
      <!-- Sales by Category -->
      <div class="col-lg-4">
        <div class="main-card card shadow-sm border-0 h-100">
          <div class="card-header py-3">
            <div class="card-header-title">
              <i class="header-icon lnr-pie-chart me-2"></i>
              Sales by Category
            </div>
          </div>
          <div class="card-body">
            <pie-chart-component :data="salesByCategoryData" :options="salesByCategoryOptions" :height="250" />
            <div class="category-legend mt-3">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="legend-item d-flex justify-content-between align-items-center py-2"
              >
                <div class="d-flex align-items-center">
                  <span class="legend-color" :style="`background: ${category.color}`"></span>
                  <span class="ms-2">{{ category.name }}</span>
                </div>
                <span class="fw-bold">{{ category.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Products -->
      <div class="col-lg-4">
        <div class="main-card card shadow-sm border-0 h-100">
          <div class="card-header py-3">
            <div class="card-header-title">
              <i class="header-icon lnr-star me-2"></i>
              Top Products
            </div>
            <div class="btn-actions-pane-right">
              <b-dropdown variant="link" no-caret right size="sm">
                <template #button-content>
                  <font-awesome-icon icon="ellipsis-vertical" />
                </template>
                <b-dropdown-item>Export</b-dropdown-item>
                <b-dropdown-item>Print</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th class="border-0 ps-3">Product</th>
                    <th class="border-0 text-center">Sales</th>
                    <th class="border-0 text-end pe-3">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in topProducts" :key="product.id">
                    <td class="ps-3">
                      <div class="d-flex align-items-center">
                        <div class="product-icon me-2" :style="`background: ${product.color}`">
                          {{ product.name.charAt(0) }}
                        </div>
                        <div>
                          <div class="fw-medium">{{ product.name }}</div>
                          <small class="text-muted">{{ product.category }}</small>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <span class="badge bg-light text-dark">{{ product.sales }}</span>
                    </td>
                    <td class="text-end pe-3 fw-bold text-success">${{ product.revenue }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Insights -->
      <div class="col-lg-4">
        <div class="main-card card shadow-sm border-0 h-100">
          <div class="card-header py-3">
            <div class="card-header-title">
              <i class="header-icon lnr-users me-2"></i>
              Customer Insights
            </div>
          </div>
          <div class="card-body">
            <div class="insights-grid">
              <div class="insight-card mb-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 class="mb-1">8,234</h3>
                    <p class="text-muted mb-0">Total Customers</p>
                  </div>
                  <div class="insight-icon bg-primary bg-opacity-10 text-primary">
                    <font-awesome-icon icon="users" />
                  </div>
                </div>
                <div class="mt-2">
                  <small class="text-success"> <font-awesome-icon icon="arrow-up" /> 12.5% from last month </small>
                </div>
              </div>

              <div class="insight-card mb-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 class="mb-1">1,893</h3>
                    <p class="text-muted mb-0">Active Users</p>
                  </div>
                  <div class="insight-icon bg-success bg-opacity-10 text-success">
                    <font-awesome-icon icon="user-check" />
                  </div>
                </div>
                <div class="mt-2">
                  <small class="text-success"> <font-awesome-icon icon="arrow-up" /> 8.2% from last week </small>
                </div>
              </div>

              <div class="customer-satisfaction">
                <h6 class="mb-3">Customer Satisfaction</h6>
                <div class="satisfaction-bar">
                  <div class="d-flex justify-content-between mb-2">
                    <small class="text-muted">Overall Rating</small>
                    <small class="fw-bold">4.8/5.0</small>
                  </div>
                  <div class="progress" style="height: 8px">
                    <div
                      class="progress-bar bg-gradient"
                      style="width: 96%; background: linear-gradient(90deg, #69aa8a, #5a9677)"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import PageTitle from '@/Layout/Components/PageTitle.vue'
import { useDashboardStore } from '@/stores/dashboard'
import LineChartComponent from '@/components/Charts/LineChartComponent.vue'
import DoughnutChartComponent from '@/components/Charts/DoughnutChartComponent.vue'
import PieChartComponent from '@/components/Charts/PieChartComponent.vue'

export default defineComponent({
  name: 'AnalyticsEnhanced',
  components: {
    PageTitle,
    LineChartComponent,
    DoughnutChartComponent,
    PieChartComponent
  },
  setup() {
    const dashboardStore = useDashboardStore()
    const selectedPeriod = ref('Month')

    const heading = 'Analytics Dashboard'
    const subheading = 'Real-time insights and performance metrics at your fingertips'
    const icon = 'pe-7s-graph3 icon-gradient bg-happy-green'

    const quickStats = ref([
      {
        id: 1,
        label: 'Total Revenue',
        value: '$125,435',
        change: 23.5,
        trending: 'up',
        icon: 'dollar-sign',
        gradient: 'linear-gradient(135deg, #69aa8a, #5a9677)'
      },
      {
        id: 2,
        label: 'Active Users',
        value: '8,234',
        change: 12.5,
        trending: 'up',
        icon: 'users',
        gradient: 'linear-gradient(135deg, #17a2b8, #20c997)'
      },
      {
        id: 3,
        label: 'Conversion Rate',
        value: '3.84%',
        change: 5.2,
        trending: 'down',
        icon: 'chart-line',
        gradient: 'linear-gradient(135deg, #ffc107, #fd7e14)'
      },
      {
        id: 4,
        label: 'Avg. Order Value',
        value: '$284',
        change: 18.7,
        trending: 'up',
        icon: 'shopping-cart',
        gradient: 'linear-gradient(135deg, #6f42c1, #e83e8c)'
      }
    ])

    const revenueChartData = computed(() => ({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Revenue',
          data: [30000, 35000, 32000, 40000, 38000, 45000, 42000, 48000, 46000, 52000, 50000, 55000],
          borderColor: '#69aa8a',
          backgroundColor: 'rgba(105, 170, 138, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Expenses',
          data: [20000, 22000, 21000, 25000, 24000, 28000, 27000, 30000, 29000, 32000, 31000, 34000],
          borderColor: '#ff7851',
          backgroundColor: 'rgba(255, 120, 81, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    }))

    const revenueChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: context => {
              return context.dataset.label + ': $' + context.parsed.y.toLocaleString()
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + value.toLocaleString()
          }
        }
      }
    }

    const performanceScoreData = computed(() => ({
      datasets: [
        {
          data: [92, 8],
          backgroundColor: ['#69aa8a', '#f8f9fa'],
          borderWidth: 0
        }
      ]
    }))

    const performanceScoreOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    }

    const salesByCategoryData = computed(() => ({
      labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'],
      datasets: [
        {
          data: [35, 25, 20, 15, 5],
          backgroundColor: ['#69aa8a', '#17a2b8', '#ffc107', '#6f42c1', '#ff7851'],
          borderWidth: 0
        }
      ]
    }))

    const salesByCategoryOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }

    const categories = ref([
      { name: 'Electronics', percentage: 35, color: '#69aa8a' },
      { name: 'Clothing', percentage: 25, color: '#17a2b8' },
      { name: 'Home & Garden', percentage: 20, color: '#ffc107' },
      { name: 'Sports', percentage: 15, color: '#6f42c1' },
      { name: 'Books', percentage: 5, color: '#ff7851' }
    ])

    const recentActivities = ref([
      {
        id: 1,
        type: 'success',
        icon: 'shopping-cart',
        description: 'New order #1982 received',
        time: '2 minutes ago'
      },
      {
        id: 2,
        type: 'info',
        icon: 'user-plus',
        description: 'New customer registration',
        time: '15 minutes ago'
      },
      {
        id: 3,
        type: 'warning',
        icon: 'exclamation-triangle',
        description: 'Low stock alert: Product SKU #4521',
        time: '1 hour ago'
      },
      {
        id: 4,
        type: 'primary',
        icon: 'chart-line',
        description: 'Daily report generated',
        time: '2 hours ago'
      }
    ])

    const topProducts = ref([
      {
        id: 1,
        name: 'MacBook Pro',
        category: 'Electronics',
        sales: 145,
        revenue: '289,550',
        color: '#69aa8a'
      },
      {
        id: 2,
        name: 'iPhone 13',
        category: 'Electronics',
        sales: 312,
        revenue: '249,600',
        color: '#17a2b8'
      },
      {
        id: 3,
        name: 'Nike Air Max',
        category: 'Sports',
        sales: 198,
        revenue: '19,800',
        color: '#ffc107'
      },
      {
        id: 4,
        name: 'Smart Watch',
        category: 'Electronics',
        sales: 87,
        revenue: '17,400',
        color: '#6f42c1'
      }
    ])

    onMounted(() => {
      dashboardStore.refreshDashboard()
    })

    return {
      heading,
      subheading,
      icon,
      selectedPeriod,
      quickStats,
      revenueChartData,
      revenueChartOptions,
      performanceScoreData,
      performanceScoreOptions,
      salesByCategoryData,
      salesByCategoryOptions,
      categories,
      recentActivities,
      topProducts
    }
  }
})
</script>

<style scoped>
/* Page Header Gradient */
.page-header-gradient {
  background: linear-gradient(135deg, #69aa8a 0%, #5a9677 100%);
  padding: 2rem;
  border-radius: 1rem;
  margin: -1.5rem -1.5rem 0;
  box-shadow: 0 4px 24px rgba(105, 170, 138, 0.2);
}

.page-header-gradient :deep(.page-title) {
  margin-bottom: 0;
}

.page-header-gradient :deep(.page-title-heading),
.page-header-gradient :deep(.page-title-subheading) {
  color: white !important;
}

.page-header-gradient :deep(.page-title-icon) {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

/* Quick Stats Cards */
.quick-stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.quick-stat-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.stat-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.stat-content {
  text-align: left;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.2;
}

.stat-trend {
  font-size: 0.813rem;
}

/* Enhanced Card Styles */
.main-card {
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.main-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08) !important;
}

.card-header {
  background: transparent;
  border-bottom: 1px solid #f0f2f5;
}

.card-header-title {
  font-weight: 600;
  color: #495057;
  display: flex;
  align-items: center;
}

.header-icon {
  font-size: 1.25rem;
}

/* Revenue Chart */

.revenue-stat {
  padding: 1rem;
  border-right: 1px solid #f0f2f5;
}

.revenue-stat:last-child {
  border-right: none;
}

/* Performance Score */
.score-circle {
  position: relative;
  display: inline-block;
}

.score-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.score-overlay h2 {
  font-size: 2.5rem;
  font-weight: 700;
}

.metric-item {
  border-bottom: 1px solid #f0f2f5;
}

.metric-item:last-child {
  border-bottom: none;
}

/* Activity Feed */
.activity-feed {
  max-height: 280px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  align-items: start;
  padding: 1rem;
  border-bottom: 1px solid #f0f2f5;
  transition: background 0.2s ease;
}

.activity-item:hover {
  background: #f8f9fa;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 1rem;
}

.activity-content p {
  font-size: 0.875rem;
  color: #495057;
}

/* Category Legend */
.legend-item {
  border-bottom: 1px solid #f0f2f5;
}

.legend-item:last-child {
  border-bottom: none;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
}

/* Product Table */
.product-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

/* Customer Insights */
.insight-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.insight-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .page-header-gradient {
    padding: 1.5rem;
    margin: -1rem -1rem 0;
  }

  .stat-value {
    font-size: 1.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .quick-stat-card {
    padding: 1rem;
  }

  .revenue-stat {
    border-right: none;
    border-bottom: 1px solid #f0f2f5;
    padding: 0.75rem;
  }

  .revenue-stat:last-child {
    border-bottom: none;
  }
}

/* Custom Scrollbar */
.activity-feed::-webkit-scrollbar {
  width: 4px;
}

.activity-feed::-webkit-scrollbar-track {
  background: #f0f2f5;
}

.activity-feed::-webkit-scrollbar-thumb {
  background: #dee2e6;
  border-radius: 2px;
}

.activity-feed::-webkit-scrollbar-thumb:hover {
  background: #ced4da;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-card {
  animation: fadeIn 0.5s ease-out;
}

.quick-stat-card {
  animation: fadeIn 0.5s ease-out;
  animation-fill-mode: both;
}

.quick-stat-card:nth-child(1) {
  animation-delay: 0.1s;
}
.quick-stat-card:nth-child(2) {
  animation-delay: 0.2s;
}
.quick-stat-card:nth-child(3) {
  animation-delay: 0.3s;
}
.quick-stat-card:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
