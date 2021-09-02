import React from 'react';
import './charts.styles.scss';

import Chart from '../../components/chart/chart.component';

const Charts = () => {
    const chartData = [65, 59, 80, 81, 56, 55, 40];
    const chartLabel = "ADA";
    return(
        <div className="page-chart">
                <div className="article">
                    <Chart label={chartLabel} data={chartData}/>
                </div>
        </div>
    ) 
}
export default Charts;
