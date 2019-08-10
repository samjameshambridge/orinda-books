import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

import InventoryProgressBar from "components/admin/inventory/InventoryProgressBar";
import LinkButton from "components/buttons/LinkButton";

function SummaryInfo({ books, toggleModal }) {
  function onClickHandler() {
    toggleModal("summary");

    document.addEventListener("click", function clickFunction(e) {
      // if you've clicked outside of the white modal box then toggle modal
      // and remove click listener
      if (e.target.contains(document.querySelector(".modal-overlay"))) {
        toggleModal("");

        document.removeEventListener("click", clickFunction);
      }
    });
  }
  return (
    <div className="inventory-summary-content-container">
      <h3>Total Books: {books && books.length}</h3>
      <div className="inventory-summary-progress-bar-button">
        <InventoryProgressBar />
        <LinkButton
          value="See Inventory Summary"
          onClick={() => onClickHandler()}
        />
      </div>
      <div className="inventory-summary-genre-item">
        <span className="circle">&nbsp;</span>
        <h5>Fiction</h5>
        <span className="circle">&nbsp;</span>
        <h5>Non-Fiction</h5>
      </div>
    </div>
  );
}

SummaryInfo.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func.isRequired
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
  connect(
    mapStateToProps,
    { toggleModal }
  ),
  firestoreConnect([{ collection: "books" }])
)(SummaryInfo);
