import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class MixedLineSalesColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "line",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 2, 2],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "32%",
          },
        },
        fill: {
          opacity: [1, 0.25, 1],
          gradient: {
            inverseColors: false,
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: false,
          },
        },
        yaxis: {
          title: {
            text: "Growth",
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
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
        type="line"
      />
    );
  }
}

export default MixedLineSalesColumnChart;
