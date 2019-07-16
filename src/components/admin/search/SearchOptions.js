import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSearchType } from "actions/searchActions";

function SearchOptions({ setSearchType }) {
  useEffect(() => {
    return () => {
      setSearchType(null);
    };
  });

  function clickHandler(e) {
    setSearchType(e.target.name);
  }

  return (
    <React.Fragment>
      <div className="input-label-group">
        <input type="radio" name="orders" onClick={e => clickHandler(e)} />
        <label htmlFor="orders">Orders</label>
      </div>
      <div className="input-label-group">
        <input type="radio" name="staff" onClick={e => clickHandler(e)} />
        <label htmlFor="staff">Staff</label>
      </div>
      <div className="input-label-group">
        <input type="radio" name="inventory" onClick={e => clickHandler(e)} />
        <label htmlFor="search">Inventory</label>
      </div>
    </React.Fragment>
  );
}

SearchOptions.propTypes = {
  setSearchType: PropTypes.func.isRequired
};

export default connect(
  null,
  { setSearchType }
)(SearchOptions);
