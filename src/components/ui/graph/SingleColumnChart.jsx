import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class SingleColumnChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
          series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '35%',
                endingShape: 'rounded',
              },
            },
            
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 5,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
            },
           
            fill: {
              opacity: 1,
              colors: ['#d67cf7']
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        
        
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar"/>
        );
    }
}

export default SingleColumnChart;

