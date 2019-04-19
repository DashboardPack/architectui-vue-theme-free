import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  mounted() {
    this.renderChart({
      labels: [
        'Cars',
        'Trains',
        'Airplanes'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#8dace7',
          '#71deb9',
          '#ef869e'
        ],
        hoverBackgroundColor: [
          '#8dace7',
          '#71deb9',
          '#ef869e'
        ]
      }]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
