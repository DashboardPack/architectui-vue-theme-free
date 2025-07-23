<template>
  <BaseChart type="radar" :data="chartData" :options="chartOptions" />
</template>

<script>
import BaseChart from '@/components/BaseChart.vue'

export default {
  name: 'RadarSimple',
  components: {
    BaseChart
  },
  data() {
    return {
      chartData: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
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
