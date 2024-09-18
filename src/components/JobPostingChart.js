import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/JobPostingChart.scss";

// Registering required components
ChartJS.register(
  CategoryScale, // For 'category' scale on x-axis
  LinearScale, // For linear scale on y-axis
  BarElement, // For the bars in the bar chart
  Title,
  Tooltip,
  Legend
);

const JobPostingsChart = () => {
  const data = {
    labels: ["Private Equity Associate"],
    datasets: [
      {
        label: "Private Equity Associate",
        data: [150],
        backgroundColor: "#6b5b95", // First bar color
      },
      {
        label: "Private Equity Associate",
        data: [200],
        backgroundColor: "#89c4f4", // Second bar color
      },
      {
        label: "Private Equity Associate",
        data: [250],
        backgroundColor: "#9de0ad", // Third bar color
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bars
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false, // Hide the labels on the y-axis
        },
        grid: {
          display: false, // Optionally, remove grid lines on the y-axis as well
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true, // Use point style for legend items
          pointStyle: "rect", // Use rectangular bullet points
          boxWidth: 20, // Width of the color box
          padding: 10, // Spacing between boxes and text
          color: "#000", // Default color for text
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="job-postings-chart">
      <h3 className="chart-title">Job Postings</h3>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default JobPostingsChart;
