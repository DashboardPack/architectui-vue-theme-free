import {PolarArea} from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted() {
    this.renderChart({
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          '#8dace7',
          '#4BC0C0',
          '#ef869e',
          '#E7E9ED',
          '#71deb9'
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
