import { Component } from "react";
import ReactApexChart from "react-apexcharts";

const generateDayWiseTimeSeries = (baseDate, count, { min, max }) => {
  let series = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    series.push([date.getTime(), value]);
  }
  return series;
};

class StackedAreaChart extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
          
          series: [
            {
              name: 'South',
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 5, {
                min: 2,
                max: 20
              })
            },
            {
              name: 'North',
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 5, {
                min: 2,
                max: 12
              })
            },
            {
              name: 'Central',
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 5, {
                min: 2,
                max: 8
              })
            }
          ],
          options: {
            chart: {
              type: 'area',
              height: 350,
              stacked: true,
              toolbar: {
                show: false,
              },
              events: {
                selection: function (chart, e) {
                  console.log(new Date(e.xaxis.min))
                }
              },
            },
            colors: ['#546DFE', '#D77CF7', '#0CD7B1'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.4,
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'center'
            },
            xaxis: {
              type: 'datetime'
            },
          },
        
        
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} height={400} type="area"/>
        );
    }
}

export default StackedAreaChart;

