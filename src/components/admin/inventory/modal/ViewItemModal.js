import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ModalCloseButton from "components/modal/ModalCloseButton";

function SummaryModal({
  view_item: {
    title,
    author,
    genre,
    publicationDate,
    imageLocation,
    isbn,
    salePrice,
    quantity
  }
}) {
  return (
    <React.Fragment>
      <h1 className="inventory-view-modal-title text-theme-blue">Details</h1>
      <div className="modal-view-content">
        <img src={imageLocation} className="modal-view-image" alt="book" />
        <div className="modal-view-item-info text-theme-blue">
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Genre: {genre}</p>
          <p>ISBN: {isbn}</p>
          <p>Sale Price: {salePrice}</p>
          <p>Publication Date: {publicationDate}</p>
          <p>In Stock: {quantity}</p>
        </div>
        <ModalCloseButton />
      </div>
    </React.Fragment>
  );
}

SummaryModal.propTypes = {
  view_item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    imageLocation: PropTypes.string.isRequired,
    isbn: PropTypes.number.isRequired,
    publicationDate: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    salePrice: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default connect(
  mapStateToProps,
  null
)(SummaryModal);
