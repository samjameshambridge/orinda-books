import React from "react";
import PropTypes from "prop-types";

import searchImg from "img/widgets/search.png";

function SearchIcon({ onClick }) {
  return (
    <img
      src={searchImg}
      onClick={onClick}
      className="search-icon"
      alt="search"
    />
  );
}

SearchIcon.propTypes = {
  onClick: PropTypes.func
};

export default SearchIcon;
