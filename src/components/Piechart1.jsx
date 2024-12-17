import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const initialData = [25, 20, 15, 10, 30];
  const labels = [
    "RSB",
    "UNGTA MINES",
    "TATA STEEL GAMHARIA",
    "BRAHMANI RIVER",
    "JINDAL STAINLESS LIMITED",
  ];

  const colors = [
    "#2f265f", // Dark purple
    "#4f75ed", // Blue
    "#29504b", // Teal
    "#f88c34", // Orange
    "#f23a53", // Red
  ];

  const [hoverOffsets, setHoverOffsets] = useState(
    new Array(initialData.length).fill(0)
  );

  const handleClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      setHoverOffsets((prev) =>
        prev.map((offset, i) => (i === index ? (offset === 40 ? 0 : 40) : 0))
      );
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: initialData,
        backgroundColor: colors,
        borderColor: "#fff",
        borderWidth: 6,
        hoverOffset: 40, // Default hover offset
        offset: hoverOffsets, // Dynamic offset for slices
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff", // Text color
        font: {
          size: 7, // Uniform font size
          weight: "bold",
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value.toFixed(0)}%\n${label}`; // Format with percentage and label
        },
        align: "center",
        anchor: "center",
        clip: true,
        padding: 4,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            const label = tooltipItem.label;
            return `${label}: ${value.toFixed(0)}%`;
          },
        },
      },
      legend: {
        display: false, // Hide legend for a cleaner chart
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    rotation: Math.PI / 2, // Start the first slice at the top
    onClick: handleClick, // Register the click handler
  };

  return (
    <div className="max-w-60 p-4 bg-white shadow-lg rounded-lg ml-5 ">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-center text-gray-700">
          Top 5 Customers by Value
        </h2>
      </div>
      <div className="relative" s>
        <Pie data={data} options={options} className="max-w-96"/>
      </div>
    </div>
  );
};

export default PieChart;