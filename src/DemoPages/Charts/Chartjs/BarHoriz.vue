<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'HorizontalBarChart',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#3f6ad8'
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: '#e83e8c'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    }
  }
}
</script>
