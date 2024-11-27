import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class GradientPieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
          series: [44, 55, 41, 17, 15],
          options: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270,
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        showAlways: true,
                        show: true
                      }
                    }
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              position: 'bottom',
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            // title: {
            //   text: 'Gradient Donut with custom Start-angle'
            // },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: '100%'
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series}  type="donut"/>
        );
    }
}

export default GradientPieChart;

