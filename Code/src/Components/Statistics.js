import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";

const TwoCurveGraphs = () => {
  const [count, setCount] = useState(5600);

  useEffect(() => {
    // Create the charts
    const ctx1 = document.getElementById("myChart1").getContext("2d");
    const chart1 = new Chart(ctx1, {
      type: "line",
      data: {
        labels: [
          "0",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
        ],
        datasets: [
          {
            label: "No. of products scanned",
            data: [0, 2600, 1800, 3500, 4300, 4960, 5600, 7600, 8400, 10000],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        },
      },
    });

    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const chart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: [
          "0",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
        ],
        datasets: [
          {
            label: "No. of companies registered",
            data: [0, 50, 29, 90, 146, 195, 250, 299, 380, 550],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        },
      },
    });

    // Cleanup function to destroy the charts when the component unmounts
    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  useEffect(() => {
    // Update the count every second
    const interval = setInterval(() => {
      if (count < 10000) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="map-container" id="list-item-3">
      <style>
        {`
          .graph-container {
              display: flex;
              margin-top:1rem;
              margin-bottom:2rem;
              margin-left:2rem;
              margin-right:2rem;
          }

          .map-container{
            background-color:black;
          }

          .map-container h1{
            text-align:center;
            color:white;
            margin-top:7rem;
            font-size:5.5rem;
            letter-spacing:1.1em;
            font-family: 'Red Hat Display', sans-serif;
            
          }

          .graph {
              width: 50%;
              border: 0.2rem solid #ccc;
          }

          .counter h2 {
              padding-top: 0.2rem;
          }

          .counter {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(to right, #8860D0, #5AB9EA);
            padding: 1rem; /* Adjust padding as needed */
            box-sizing: border-box; /* Include padding in the width */
            width: 28rem; /* Adjust the width as needed */
            height:5.5rem;
            border-radius:2.5rem;
            margin: 0 auto;/* Center the div */
            margin-top:0.8rem; 
            margin-bottom:2rem;
        }

          .counter p {
              font-size: 2rem;
              font-weigth:bold;
          }
        `}
      </style>
      <h1>Statistics</h1>
      <div className="graph-container">
        <div className="graph">
          <canvas id="myChart1"></canvas>
        </div>
        <div className="graph">
          <canvas id="myChart2"></canvas>
        </div>
      </div>

      <div className="counter">
        <h2>Number Of Products Scanned </h2>
        <p id="counter">{count}</p>
      </div>
    </div>
  );
};

export default TwoCurveGraphs;
