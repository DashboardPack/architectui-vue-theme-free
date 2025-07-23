<!--
  Dashboard Widget Component
  Reusable widget component that demonstrates Pinia store usage
-->
<template>
  <div class="card no-shadow rm-border bg-transparent widget-chart text-start">
    <div class="widget-content p-0">
      <div class="widget-content-wrapper">
        <div class="widget-content-left me-3">
          <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg opacity-10" :class="iconBgClass"></div>
            <i :class="iconClass" class="text-white opacity-8"></i>
          </div>
        </div>
        <div class="widget-content-right flex-grow-1">
          <div class="widget-chart-content">
            <div class="widget-subheading">{{ stat.label }}</div>
            <div class="widget-numbers fs-1 fw-bold" :class="valueClass">
              {{ stat.value }}
            </div>
            <div class="widget-description opacity-8 text-focus">
              <div class="d-inline pe-1" :class="stat.trendColor">
                <font-awesome-icon :icon="stat.trendIcon" />
                <span class="ps-1">{{ stat.formattedChange }}</span>
              </div>
              {{ stat.sublabel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'

export default {
  name: 'DashboardWidget',
  props: {
    statKey: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: 'pe-7s-graph1'
    },
    iconBgClass: {
      type: String,
      default: 'bg-primary'
    },
    valueClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const dashboardStore = useDashboardStore()

    // Get the specific stat from the store
    const stat = computed(() => {
      const statData = dashboardStore.stats[props.statKey]
      if (!statData) return { label: 'N/A', value: '0', change: 0 }

      return {
        ...statData,
        trendIcon: statData.change > 0 ? 'angle-up' : 'angle-down',
        trendColor: statData.change > 0 ? 'text-success' : 'text-danger',
        formattedChange: `${Math.abs(statData.change)}%`
      }
    })

    return {
      stat
    }
  }
}
</script>

<style scoped>
.widget-chart {
  transition: all 0.3s ease;
}

.widget-chart:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  i {
    font-size: 1.5rem;
    z-index: 2;
    color: white !important;
  }
}

.icon-wrapper-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;

  &.bg-primary {
    background-color: #0d6efd !important;
  }

  &.bg-secondary {
    background-color: #6c757d !important;
  }

  &.bg-success {
    background-color: #198754 !important;
  }

  &.bg-warning {
    background-color: #ffc107 !important;
  }

  &.bg-danger {
    background-color: #dc3545 !important;
  }

  &.bg-info {
    background-color: #0dcaf0 !important;
  }

  &.bg-dark {
    background-color: #212529 !important;
  }

  &.bg-light {
    background-color: #f8f9fa !important;
  }
}

.widget-numbers {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  margin: 0.5rem 0;
}

.widget-subheading {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.widget-description {
  font-size: 0.875rem;
  color: #6c757d;
}
</style>
