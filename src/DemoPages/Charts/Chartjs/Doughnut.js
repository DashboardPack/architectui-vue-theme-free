import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
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
          '#7097e1',
          '#4dd6a7',
          '#eb6886'
        ]
      }]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
