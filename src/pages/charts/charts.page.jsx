import React from 'react';
import './charts.styles.scss';

import Chart from '../../components/chart/chart.component';

const Charts = () => {
    const chartData =[ 
        {
            label:"ADA",
            data:[10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "rgba(0, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)"
        },
        {
            label:"ETH",
            data:[70, 60, 50, 40, 30, 20, 10],
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)"
        },
        {
            label:"BTC",
            data:[70, 60, 50, 40, 50, 60, 70],
            backgroundColor: "rgba(225, 0,230, .3)",
            borderColor: "rgb(205, 130, 158)"
        },
        {
            label:"BOLD",
            data:[10, 20, 30, 40, 50, 40, 30],
            backgroundColor: "rgba(225, 204,0, .3)",
            borderColor: "rgb(205, 130, 158)"
        }
    ];

    return(
        <div className="page-chart">
                <div className="article">
                    <Chart chartData={chartData}/>
                </div>
        </div>
    ) 
}
export default Charts;
