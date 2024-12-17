import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesTrendChart = () => {
  // Data for the chart
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
      "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Sales",
        data: [100, 300, 150, 500, 200, 400, 250, 350, 450, 300, 400, 600],
        backgroundColor: "#1E293B", // Dark color for bars
        borderRadius: 50, // Rounded bars
        barThickness: 12, // Thin bar width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
      datalabels: {
        display: false, // Disable data labels if datalabel plugin is installed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on x-axis
        },
      },
      y: {
        grid: {
          color: "rgba(209, 213, 219, 0.2)", // Light grid lines
        },
        beginAtZero: true,
        ticks: {
          stepSize: 100, // Interval on the y-axis
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white ml-5 rounded-lg shadow-md">
      <h2 className="text-center text-lg font-semibold mb-4">Sales Trend</h2>
      <div className="h-60">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesTrendChart;
