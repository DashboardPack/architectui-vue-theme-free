<template>
  <BaseChart type="pie" :data="chartData" :options="chartOptions" />
</template>

<script>
import BaseChart from '@/components/BaseChart.vue'

export default {
  name: 'PieSimple',
  components: {
    BaseChart
  },
  data() {
    return {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
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
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      }
    }
  }
}
</script>
