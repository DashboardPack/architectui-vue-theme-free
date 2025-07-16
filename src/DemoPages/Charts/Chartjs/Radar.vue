<template>
  <Radar :data="chartData" :options="chartOptions" />
</template>

<script>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default {
  name: 'RadarChart',
  components: {
    Radar
  },
  data() {
    return {
      chartData: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: 'rgba(63, 106, 216, 0.2)',
            borderColor: '#3f6ad8',
            pointBackgroundColor: '#3f6ad8',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#3f6ad8'
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 96, 27, 100],
            backgroundColor: 'rgba(232, 62, 140, 0.2)',
            borderColor: '#e83e8c',
            pointBackgroundColor: '#e83e8c',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#e83e8c'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
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
