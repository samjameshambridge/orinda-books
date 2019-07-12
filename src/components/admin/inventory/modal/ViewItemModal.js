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
          <p>
            <span className="item-label">Title: </span>&nbsp;&nbsp;{title}
          </p>
          <p>
            <span className="item-label">Author: </span>&nbsp;&nbsp;{author}
          </p>
          <p>
            <span className="item-label">Genre: </span>&nbsp;&nbsp;{genre}
          </p>
          <p>
            <span className="item-label">ISBN: </span>&nbsp;&nbsp;{isbn}
          </p>
          <p>
            <span className="item-label">Sale Price: </span>&nbsp;&nbsp;
            {salePrice}
          </p>
          <p>
            <span className="item-label">Publication Date: </span>&nbsp;&nbsp;
            {publicationDate}
          </p>
          <p>
            <span className="item-label">In Stock: </span>&nbsp;&nbsp;{quantity}
          </p>
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
