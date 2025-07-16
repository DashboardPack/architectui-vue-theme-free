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
  name: 'Chart3',
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
            backgroundColor: 'rgba(86, 196, 121, 0.2)',
            borderColor: '#56c479',
            borderCapStyle: 'round',
            borderDash: [],
            borderWidth: 4,
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: '#56c479',
            pointBackgroundColor: '#ffffff',
            pointBorderWidth: 5,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#56c479',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 55, 38, 59, 80, 46]
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
