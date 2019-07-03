import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function InventoryProgressBar({ books }) {
  useEffect(() => {
    if (books) {
      const fictionBar = document.querySelector(
          ".inventory-progress-bar-fiction"
        ),
        nonFictionBar = document.querySelector(
          ".inventory-progress-bar-nonfiction"
        ),
        totalBooks = books.length;

      const fictionBookArr = books.filter(
          book => book.genre === "fiction" || book.genre === "Fiction"
        ),
        nonFictionBookArr = books.filter(
          book => book.genre === "non-fiction" || book.genre === "Non-Fiction"
        );

      fictionBar.style.width = `${(fictionBookArr.length / totalBooks) * 100}%`;
      nonFictionBar.style.width = `${(nonFictionBookArr.length / totalBooks) *
        100}%`;
    }
  });

  return (
    <div className="inventory-progress-bar-group">
      <div
        className="inventory-progress-bar inventory-progress-bar-fiction"
        role="progressbar"
      >
        &nbsp;
      </div>
      <div
        className="inventory-progress-bar inventory-progress-bar-nonfiction"
        role="progressbar"
      >
        &nbsp;
      </div>
    </div>
  );
}

InventoryProgressBar.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      genre: PropTypes.string.isRequired
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
  firestoreConnect([{ collection: "books" }])
)(InventoryProgressBar);
