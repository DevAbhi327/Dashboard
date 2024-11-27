import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadialCirclePieChart = (props) => {
    const [seriesData, setSeriesData] = useState([]);
    const [labelData, setLabelData] = useState([]);

    useEffect(() => {
        if (props.seriesData) {
            const counts = props.seriesData.map(item => item.count);
            setSeriesData(counts);  
            const religions = props.seriesData.map(item => item.religion);
            setLabelData(religions); 
        }
    }, [props.seriesData]);


    const total = seriesData.reduce((a, b) => a + b, 0) || 1; 

    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total (%)',
                        formatter: () => {
                            return `${100}%`; 
                        },
                    },
                },
            },
        },
        tooltip: {
            y: {
                formatter: (value) => {
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${percentage}%`; 
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        labels: labelData,
    };

    return (
        <ReactApexChart options={options} series={seriesData} height={350} type="radialBar" />
    );
};

export default RadialCirclePieChart;
