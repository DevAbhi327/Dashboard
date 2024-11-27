import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class BarHorizontelChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
          series: [{
            data: [200, 220, 225, 290, 260, 280,300]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: false,
              },
            },
            colors: [
              "#33b2df",
              "#546E7A",
              "#d4526e",
              "#13d8aa",
              
            ],
            plotOptions: {
              bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
                barHeight: '20%',
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70' , '70-80'],
            },
     
          },
        
        
        };

    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} height={400} type="bar"/>
        );
    }
}

export default BarHorizontelChart;

