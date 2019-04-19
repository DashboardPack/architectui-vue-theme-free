import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            options: {
                legend: {
                    display: false
                },
            },
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(237, 15, 81, .2)',
                    borderColor: '#ed0f51',
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#ed0f51',
                    pointBackgroundColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#ed0f51',
                    pointHoverBorderColor: '#ed0f51',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }, {responsive: true, maintainAspectRatio: false})

    }
}
