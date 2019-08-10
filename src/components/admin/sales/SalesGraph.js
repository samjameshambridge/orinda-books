import React from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  // the data that will be passed into the LineChart
  const data = {
    // an array of dates
    // in the future, this will be fed dates by various date getters
    labels: ["04/06", "05/06", "06/06", "07/06", "08/06", "09/06", "10/06"],
    datasets: [
      {
        label: "Income per Day",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // current data for the sales
        // in the future this will be retrieved by a data request to firebase
        data: [93.54, 103.45, 82.34, 132.93, 110.38, 190.43, 78.23]
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          // display an axis title
          scaleLabel: {
            display: true,
            fontSize: 16,
            labelString: "£ / Day"
          }
        }
      ],
      xAxes: [
        {
          // display an axis title
          scaleLabel: {
            display: true,
            fontSize: 16,
            labelString: "Date"
          }
        }
      ]
    }
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
