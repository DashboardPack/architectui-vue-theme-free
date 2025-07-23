<template>
  <BaseChart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script>
import BaseChart from '@/components/BaseChart.vue'

export default {
  name: 'BarHorizontalSimple',
  components: {
    BaseChart
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        indexAxis: 'y',
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
          x: {
            beginAtZero: true
          }
        }
      }
    }
  }
}
</script>
