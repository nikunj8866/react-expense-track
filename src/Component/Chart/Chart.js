import React from "react";
import ChartBars from "./ChartBars";

import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return <div className="chart">
        { props.dataPoints.map(dataPoints => 
            <ChartBars 
                key = {dataPoints.label}
                value={dataPoints.value} 
                maxValue={totalMaximum} 
                label={dataPoints.label} 
            />
        )}
    </div>
}

export default Chart;