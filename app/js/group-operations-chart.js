var grOp = function () {
    window.chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'containerRight',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Total £, M'
            },
            subtitle: {
                text: '' // Source: WorldClimate.com
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                // labels: {
                //     formatter: function() {
                //         return this.value +'°C';
                //     },
                //     style: {
                //         color: '#89A54E'
                //     }
                // },
                title: {
                    text: '', // Temperature
                    style: {
                        color: '#89A54E'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: '', // actual
                    style: {
                        color: '#4572A7'
                    }
                },
                // labels: {
                //     formatter: function() {
                //         return this.value +' mm';
                //     },
                //     style: {
                //         color: '#4572A7'
                //     }
                // },
                opposite: true
            }],
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +
                        (this.series.name == 'actual' ? ' mm' : '°C');
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [{
                name: 'Actual',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'Target',
                color: '#89A54E',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }]
        });
    });

};
