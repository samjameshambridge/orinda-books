import React from "react";
import PropTypes from "prop-types";

import Logo from "img/orinda-books-logo.png";

function HomeLogo({ className, onClick }) {
  return (
    <img
      src={Logo}
      className={`home-logo ${className}`}
      alt="profile"
      onClick={onClick}
    />
  );
}

HomeLogo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default HomeLogo;
