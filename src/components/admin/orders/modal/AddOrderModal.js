import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";
import { getDate } from "helpers/dateFuncs";

function AddOrderModal({ firestore, toggleModal }) {
  const [author, setAuthor] = useState(),
    [title, setTitle] = useState(),
    [isbn, setIsbn] = useState(),
    [publicationDate, setPublish] = useState(),
    [genre, setGenre] = useState(),
    [subgenre, setSubgenre] = useState(),
    [quantity, setQuantity] = useState(),
    [company, setCompany] = useState();

  function submitHandler(e) {
    e.preventDefault(e);

    const inputWarning = document.querySelector(".input-warning-message"),
      isbnLength = isbn.toString().length,
      isbnInput = document.getElementById("isbnInput"),
      quantityInput = document.getElementById("quantityInput");

    if (isbnLength !== 13 || !parseInt(quantity)) {
      inputWarning.style.display = "block";

      if (isbnLength !== 13) {
        inputWarning.innerHTML =
          "Please check again, all ISBNs must be 13 digits.";
        isbnInput.classList = "warning-input";

        setTimeout(() => {
          inputWarning.style.display = "none";
          isbnInput.classList = "";
        }, 3000);

        return;
      } else {
        console.log("quantity");
        quantityInput.classList = "warning-input";
        inputWarning.innerHTML =
          "Please check again, the quantity should be greater than zero.";

        setTimeout(() => {
          inputWarning.style.display = "none";
          quantityInput.classList = "";
        }, 3000);

        return;
      }
    }

    const order = {
      book: {
        author,
        title,
        isbn: parseInt(isbn),
        publicationDate: parseInt(publicationDate),
        genre,
        subgenre
      },
      quantity: parseInt(quantity),
      company,
      date: getDate(),
      toBeFilled: getDate("filled")
    };

    firestore.add({ collection: "unfilledOrders" }, order);

    toggleModal();
  }

  return (
    <form onSubmit={e => submitHandler(e)} className="add-order-form">
      <div className="book-input-group">
        <h2>Book</h2>
        <div className="order-form-group">
          <div className="label-input-group">
            <label htmlFor="Author">Author</label>
            <input
              type="text"
              name="Author"
              onChange={e => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              name="Title"
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="ISBN">ISBN</label>
            <input
              type="number"
              name="ISBN"
              id="isbnInput"
              onChange={e => setIsbn(e.target.value)}
              required
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="Publication Date">Published</label>
            <input
              type="number"
              min="1000"
              max="2019"
              name="Publication Date"
              onChange={e => setPublish(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="order-form-group">
          <div className="label-input-group">
            <input
              type="radio"
              name="genre"
              value="fiction"
              onChange={e => setGenre(e.target.value)}
              required
            />
            <label htmlFor="fiction">Fiction</label>
          </div>
          <div className="label-input-group">
            <input type="radio" name="genre" value="non-fiction" required />
            <label htmlFor="fiction">Non-Fiction</label>
          </div>
          <div className="label-input-group">
            <label htmlFor="Sub Genre">Sub Genre</label>
            <input
              type="text"
              name="Sub Genre"
              onChange={e => setSubgenre(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className="order-input-group">
        <h2>Order</h2>
        <div className="order-form-group last-group">
          <div className="label-input-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              max="100"
              min="0"
              name="Quantity"
              onChange={e => setQuantity(e.target.value)}
              id="quantityInput"
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              onChange={e => setCompany(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <p className="input-warning-message" />
      <input className="add-button" type="submit" value="Add" />
    </form>
  );
}

AddOrderModal.propTypes = {
  firestore: PropTypes.object,
  toggleModal: PropTypes.func.isRequired
};

export default compose(
  firestoreConnect(),
  connect(
    null,
    { toggleModal }
  )
)(AddOrderModal);
