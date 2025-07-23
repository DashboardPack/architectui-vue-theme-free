<template>
  <div class="chart-wrapper">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  DoughnutController,
  PieController,
  LineController,
  BarController,
  PolarAreaController,
  RadarController
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  DoughnutController,
  PieController,
  LineController,
  BarController,
  PolarAreaController,
  RadarController
)

export default {
  name: 'BaseChart',
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.createChart()
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy()
    }
  },
  watch: {
    data: {
      handler() {
        this.updateChart()
      },
      deep: true
    },
    options: {
      handler() {
        this.updateChart()
      },
      deep: true
    }
  },
  methods: {
    createChart() {
      if (this.chart) {
        this.chart.destroy()
      }

      const ctx = this.$refs.chartCanvas.getContext('2d')
      this.chart = new ChartJS(ctx, {
        type: this.type,
        data: this.data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          ...this.options
        }
      })
    },
    updateChart() {
      if (this.chart) {
        this.chart.data = this.data
        this.chart.options = {
          responsive: true,
          maintainAspectRatio: false,
          ...this.options
        }
        this.chart.update()
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
