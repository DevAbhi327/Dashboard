import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class GradientPieChartAudienceReach extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
          series: [45, 55],
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
          
            responsive: [{
              breakpoint: 499,
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
            <ReactApexChart options={this.state.options} series={this.state.series} height={300} type="donut"/>
        );
    }
}

export default GradientPieChartAudienceReach;

