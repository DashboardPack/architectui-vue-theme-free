<template>
  <BaseChart type="polarArea" :data="chartData" :options="chartOptions" />
</template>

<script>
import BaseChart from '@/components/BaseChart.vue'

export default {
  name: 'PolarSimple',
  components: {
    BaseChart
  },
  data() {
    return {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
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
