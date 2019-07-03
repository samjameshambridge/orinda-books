import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function SearchItem({
  item: {
    author,
    book,
    company,
    date,
    dateFilled,
    email,
    firstName,
    fullName,
    genre,
    imageLocation,
    position,
    publicationDate,
    title,
    toBeFilled
  },
  search_type
}) {
  if (search_type === "inventory") {
    return (
      <div className="search-item">
        <img className="search-item-img" src={imageLocation} alt="book" />
        <p>{title}</p>
        <p>{author}</p>
        <p>{genre}</p>
        <p>{publicationDate}</p>
      </div>
    );
  } else if (search_type === "staff") {
    return (
      <div className="search-item">
        <img className="search-item-img" src={imageLocation} alt={firstName} />
        <p>{fullName}</p>
        <p>{position}</p>
        <p>{email}</p>
      </div>
    );
  } else if (search_type === "orders") {
    return (
      <div className="search-item">
        <p>
          {book.title} by {book.author}
        </p>
        <p>From: {company}</p>
        <p>Ordered: {date}</p>
        <p>
          {toBeFilled ? `Arriving: ${toBeFilled}` : `Filled: ${dateFilled}`}
        </p>
      </div>
    );
  }
}

SearchItem.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = ({ search: { search_type } }) => {
  return {
    search_type
  };
};

export default connect(mapStateToProps)(SearchItem);
