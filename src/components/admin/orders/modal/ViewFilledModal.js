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
    // hide modal
    toggleModal();

    // send a delete request to the firebase filledOrders collection with a reference
    // to the ID of the filledOrder which is retreived from the view_item in the redux store
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
          <p>
            <span className="order-label">Author:&nbsp;&nbsp;</span>
            {author}
          </p>
          <p>
            <span className="order-label">Title:&nbsp;&nbsp;</span> {title}
          </p>
          <p>
            <span className="order-label">ISBN:&nbsp;&nbsp;</span> {isbn}{" "}
          </p>
          <p>
            <span className="order-label">Genre:&nbsp;&nbsp;</span>
            {genre} ({subgenre})
          </p>
        </div>
        <div className="orders-view-modal-receipt">
          <h3>Receipt</h3>
          <p>
            <span className="order-label">Company:&nbsp;&nbsp;</span> {company}
          </p>
          <p>
            <span className="order-label">ID:&nbsp;&nbsp;</span> {id}
          </p>
          <p>
            <span className="order-label">Sent:&nbsp;&nbsp;</span> {date}
          </p>
          <p>
            <span className="order-label">Filled:&nbsp;&nbsp;</span>{" "}
            {filledDate}
          </p>
          <p>
            <span className="order-label">Quantity:&nbsp;&nbsp;</span>
            {quantity}
          </p>
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
