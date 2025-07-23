<template>
  <PolarArea :data="chartData" :options="chartOptions" />
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Title, Tooltip, Legend)

export default {
  name: 'PolarAreaChart',
  components: {
    PolarArea
  },
  data() {
    return {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [11, 16, 7, 3, 14],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderWidth: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20
            }
          }
        },
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }
    }
  }
}
</script>
