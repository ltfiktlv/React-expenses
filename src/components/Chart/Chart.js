import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {dataPoints.map((el) => (
        <ChartBar
          value={el.value}
          maxValue={totalMaximum}
          label={el.label}
          key={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
