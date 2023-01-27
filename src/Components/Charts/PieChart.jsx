import React, { useState } from "react";
import { Chart, registerables, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(...registerables);
Chart.register(ArcElement);

const PieChart = () => {
  const [data, setData] = useState({
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  });

  return (
    <div className="PieChart" style={{ height: "80vh" }}>
      <Pie data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default PieChart;
