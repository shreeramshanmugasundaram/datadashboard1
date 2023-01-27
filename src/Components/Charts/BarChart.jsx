import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const StackedBarChart = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "#FF6384",
        data: [40, 20, 30, 50],
      },
      {
        label: "Dataset 2",
        backgroundColor: "#36A2EB",
        data: [30, 10, 20, 40],
      },
    ],
  });

  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data} width={100} height={50} options={options} />
    </div>
  );
};

export default StackedBarChart;
