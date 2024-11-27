import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class SingleLineSmChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          markers: {
            size: 0,},
          toolbar: {
            show: false,
          },
         
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: [2],
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          labels: {
            show: false,
          },
          
          
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
        },
      },
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        height={100}
        type="line"
      />
    );
  }
}

export default SingleLineSmChart;
