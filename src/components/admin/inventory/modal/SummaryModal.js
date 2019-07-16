import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import ModalCloseButton from "components/modal/ModalCloseButton";
import DoughnutChart from "components/admin/inventory/modal/DoughnutChart";

function SummaryModal({ books }) {
  const [totalInventory, setTotalInventory] = useState(0),
    [totalTitles, setTotalTitles] = useState(0),
    [totalSaleValue, setTotalSaleValue] = useState(0),
    [mostStocked, determineMostStocked] = useState(0);

  useEffect(() => {
    setTotalInventory(
      books.reduce((acc, current) => {
        let newAcc = acc + current.quantity;
        return newAcc;
      }, 0)
    );

    setTotalTitles(books.length);

    setTotalSaleValue(
      books.reduce((acc, curr) => {
        let totalVal =
          parseFloat(curr.salePrice.substring(1)) * curr.quantity +
          parseFloat(acc);

        return totalVal.toFixed(2);
      }, 0)
    );

    determineMostStocked(
      books.reduce(
        (acc, curr) => {
          if (curr.quantity > acc.quantity) acc = curr;

          return acc;
        },
        { quantity: 0 }
      )
    );
  }, [books]);

  return (
    <React.Fragment>
      <h1 className="inventory-summary-modal-title">Summary</h1>
      <div className="modal-summary-content">
        <div className="modal-summary-group-container">
          <div className="modal-summary-info">
            <h3>Info</h3>
            <p>
              <span className="item-label">Quantity:&nbsp;&nbsp;</span>{" "}
              {totalInventory} books
            </p>
            <p>
              <span className="item-label">Total Titles:&nbsp;&nbsp;</span>{" "}
              {totalTitles}
            </p>
            <p>
              <span className="item-label">Sale Value:&nbsp;&nbsp;</span> £
              {totalSaleValue}
            </p>
            <p>
              <span className="item-label">Average Price:&nbsp;&nbsp;</span>{" "}
              {(totalSaleValue / totalInventory).toFixed(2)}
            </p>
            <p>
              <span className="item-label">Most Stocked:&nbsp;&nbsp;</span>{" "}
              {mostStocked.title}, {mostStocked.author}
            </p>
          </div>
          <DoughnutChart books={books} />
        </div>
        <ModalCloseButton />
      </div>
    </React.Fragment>
  );
}

SummaryModal.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationDate: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      subgenre: PropTypes.string.isRequired,
      salePrice: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  )
};

const mapStateToProps = ({
  firestore: {
    ordered: { books }
  }
}) => {
  if (books) {
    return {
      books
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "books", orderBy: ["author"] }])
)(SummaryModal);
