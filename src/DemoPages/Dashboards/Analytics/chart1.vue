<template>
  <Line :data="chartData" :options="chartOptions" :height="height" />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default {
  name: 'Chart1',
  components: {
    Line
  },
  props: {
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'My First dataset',
            fill: true,
            tension: 0.5,
            backgroundColor: 'rgba(247, 185, 36, 0.2)',
            borderColor: '#f7b924',
            borderCapStyle: 'round',
            borderDash: [],
            borderWidth: 4,
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: '#f7b924',
            pointBackgroundColor: '#ffffff',
            pointBorderWidth: 5,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#f7b924',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 46, 55, 38, 59, 80]
          }
        ]
      },
      chartOptions: {
        layout: {
          padding: {
            left: 0,
            right: 8,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          y: {
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          },
          x: {
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
