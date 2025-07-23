import { Chart, registerables } from 'chart.js'

// Register Chart.js components only once
let isRegistered = false

export function registerChartJS() {
  if (!isRegistered) {
    Chart.register(...registerables)
    isRegistered = true
  }
}

export { Chart }
