import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

import ModalCloseButton from "components/modal/ModalCloseButton";
import LinkButton from "components/buttons/LinkButton";

function SalesModal({
  view_item: {
    id,
    date,
    income,
    quantity,
    book: { title, author, isbn, genre, subgenre }
  },
  firestore,
  toggleModal
}) {
  function clickHandler() {
    // delete from the NoSql Sales collection using the specific item id
    // to determine which collection to delete
    firestore.delete({ collection: "sales", doc: id });

    // hide the modal
    toggleModal();
  }
  return (
    <div className="sales-view-modal">
      <div className="sales-view-modal-titles">
        <h1>{title}</h1>
        <h5>Sales ID: {id}</h5>
      </div>
      <div className="sales-view-modal-content">
        <div className="sales-view-modal-book">
          <h3>Info</h3>
          <p>Author: {author}</p>
          <p>Title: {title}</p>
          <p>ISBN: {isbn} </p>
          <p>
            Genre: {genre} ({subgenre})
          </p>
        </div>
        <div className="sales-view-modal-receipt">
          <h3>Receipt</h3>
          <p>Date: {date}</p>
          <p>ID: {id}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {income}</p>
        </div>
      </div>
      <div className="sales-view-modal-buttons">
        <ModalCloseButton />
        <LinkButton
          value="Remove from Database"
          onClick={() => clickHandler()}
        />
      </div>
    </div>
  );
}

SalesModal.propTypes = {
  view_item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    income: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    book: PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isbn: PropTypes.number.isRequired
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
);
