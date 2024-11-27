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

class SparkLineChart extends Component {
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
            }
          ],
          options: {
            chart: {
              type: 'area',
              height: 100,
              sparkline: {
                enabled: true
              },
            },
            stroke: {
              curve: "smooth",
              width: [2],
            },
            fill: {
              opacity: 0.3
            },
            colors: ['#0CD7B1'],
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            yaxis: {
              min: 0
            },
          },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="area"/>
        );
    }
}

export default SparkLineChart;

