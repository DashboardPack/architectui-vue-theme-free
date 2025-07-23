<template>
  <div class="chart-container" :style="`height: ${height}px`">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart, registerChartJS } from './chartSetup'

registerChartJS()

export default defineComponent({
  name: 'DoughnutChartComponent',
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    height: {
      type: Number,
      default: 200
    }
  },
  setup(props) {
    const chartCanvas = ref(null)
    let chartInstance = null

    const createChart = () => {
      if (!chartCanvas.value) return

      if (chartInstance) {
        chartInstance.destroy()
        chartInstance = null
      }

      const ctx = chartCanvas.value.getContext('2d')
      chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: props.data,
        options: {
          ...props.options,
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }

    onMounted(() => {
      createChart()
    })

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy()
        chartInstance = null
      }
    })

    watch(
      () => props.data,
      () => {
        createChart()
      },
      { deep: true }
    )

    return {
      chartCanvas
    }
  }
})
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
}
</style>
