import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Doughnut } from "react-chartjs-2";

import Spinner from "components/general/Spinner";

function DoughnutChart({ books }) {
  const [subgenres, determineSubgenres] = useState([]);

  useEffect(() => {
    if (books) {
      // this function return an array of objects with all the subgenres in the inventory
      // and total number of books for each subgenre
      determineSubgenres(
        books.reduce((acc, curr) => {
          if (acc.filter(item => item.subgenre === curr.subgenre).length) {
            acc.map(item => {
              if (item.subgenre === curr.subgenre) {
                item.total++;
                return item;
              } else {
                return item;
              }
            });

            return acc;
          } else {
            acc.push({
              subgenre: curr.subgenre,
              total: 1
            });
            return acc;
          }
        }, [])
      );
    }
  }, [books]);

  if (subgenres.length) {
    let labels = subgenres.reduce((acc, curr) => {
      acc.push(curr.subgenre);
      return acc;
    }, []);

    let numbers = subgenres.reduce((acc, curr) => {
      acc.push(curr.total);
      return acc;
    }, []);

    // object to pass into doughtnut chart
    const data = {
        datasets: [
          {
            backgroundColor: [
              "#45546c",
              "#5cb85c",
              "#ffde59",
              "#d2c7ff",
              "#d9534f",
              "#FFA500"
            ],
            data: numbers
          }
        ],
        labels
      },
      options = {
        legend: {
          boxWidth: "20",
          fontFamily: "Montserrat",
          fontSize: "16",
          position: "left"
        }
      };

    return (
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    );
  } else return <Spinner />;
}

DoughnutChart.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      genre: PropTypes.string.isRequired,
      subgenre: PropTypes.string.isRequired
    })
  )
};

export default DoughnutChart;
