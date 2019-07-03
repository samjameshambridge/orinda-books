import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

import ModalCloseButton from "components/modal/ModalCloseButton";
import LinkButton from "components/buttons/LinkButton";

function ViewFilledModal({
  view_item: {
    id,
    company,
    filledDate,
    date,
    quantity,
    book: { title, author, genre, subgenre, isbn }
  },
  firestore,
  toggleModal
}) {
  function clickHandler() {
    toggleModal();

    firestore.delete({ collection: "filledOrders", doc: id });
  }
  return (
    <div className="orders-view-modal">
      <div className="orders-view-modal-titles">
        <h1>{title}</h1>
        <h5>Company: {company}</h5>
        <h5>Receipt ID: {id}</h5>
      </div>
      <div className="orders-view-modal-content">
        <div className="orders-view-modal-book">
          <h3>Info</h3>
          <p>Author: {author}</p>
          <p>Title: {title}</p>
          <p>ISBN: {isbn} </p>
          <p>
            Genre: {genre} ({subgenre})
          </p>
        </div>
        <div className="orders-view-modal-receipt">
          <h3>Receipt</h3>
          <p>Company: {company}</p>
          <p>ID: {id}</p>
          <p>Sent: {date}</p>
          <p>Filled: {filledDate}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="orders-view-modal-buttons">
        <ModalCloseButton />
        <LinkButton
          className="text-theme-red"
          value="Remove from Database"
          onClick={() => clickHandler()}
        />
      </div>
    </div>
  );
}

ViewFilledModal.propTypes = {
  view_item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    filledDate: PropTypes.string.isRequired,
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      isbn: PropTypes.number.isRequired,
      publicationDate: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })
  }),
  firestore: PropTypes.object,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    {
      toggleModal
    }
  )
)(ViewFilledModal);
