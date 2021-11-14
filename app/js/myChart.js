var chartColors = {
    red: 'rgb(255,135,123)',
    purple: 'rgb(168,137,233)',
    blue: 'rgb(91,204,255)',
    grey: 'rgb(191, 191, 191)'
};
var ticks = [100,200,300,400];
var config = {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
            data: [
                250,
                150,
                250,
                220,
                170,
                200,
                220,
                240,
                160,
                130,
                220,
                180
            ],
            fill: false,
        }, {
            label: "My Second dataset",
            fill: false,
            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
            data: [
                150,
                200,
                160,
                250,
                210,
                200,
                190,
                200,
                220,
                190,
                170,
                230
            ],
        }, {
            label: "My Third dataset",
            fill: false,
            backgroundColor: chartColors.purple,
            borderColor: chartColors.purple,
            data: [
                210,
                110,
                220,
                200,
                140,
                220,
                110,
                120,
                130,
                100,
                110,
                150
            ],
        }
        ]
    },
    options: {
        maintainAspectRatio:false,
        elements: {
            point: {
                pointStyle: 'rect'
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        tooltips: {
            mode: 'label',
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                },
                grid: {
                    display: false
                }
            },
            yAxes: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }
        }
    }
}
var ctx = document.getElementById("myChart").getContext("2d");
window.myLine = new Chart(ctx, config);