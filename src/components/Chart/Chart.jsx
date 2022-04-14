import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export const Chart = ({ dataPoints }) => {
    const dataPointsMax = dataPoints.map((point) => point.value);
    const totalMax = Math.max(...dataPointsMax);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMax}
                />
            ))}
        </div>
    );
};
