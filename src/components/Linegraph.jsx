import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const LineChart = () => {
  const data = {
    labels: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
    ],
    datasets: [
      {
        label: "Sales",
        data: [20, 10, 15, 12, 8, 20, 25, 12, 18, 23, 15, 28],
        borderColor: "rgba(59, 130, 246, 1)", // Tailwind blue-500
        backgroundColor: "transparent",
        borderWidth: 4, // Increased line width
        pointBackgroundColor: ["rgba(96, 165, 250, 1)", "rgba(147, 51, 234, 1)"],
        pointBorderColor: "transparent",
        pointHoverRadius: 5,
        pointRadius: 4,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `Sales: ${context.raw}`,
        },
        backgroundColor: "#1f2937", // Dark gray
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF" }, // Tailwind gray-400
      },
      y: {
        grid: { color: "#E5E7EB" }, // Tailwind gray-200
        ticks: {
          color: "#9CA3AF",
          stepSize: 5,
          callback: function (value) {
            if ([0, 5, 10, 15, 20, 25, 30].includes(value)) {
              return value;
            }
          },
        },
        suggestedMin: 0,
        suggestedMax: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to stretch to fit container
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-5 mb-3 max-w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Reports</h3>
        <h3 className="text-lg font-semibold text-gray-700 mx-auto">
          Month-wise Order Received
        </h3>
      </div>
      <div className="relative w-full max-h-64"> {/* Set height explicitly */}
        {/* Ensure the chart is responsive and fits within the container */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
