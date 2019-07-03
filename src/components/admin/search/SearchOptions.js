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

  return (
    <React.Fragment>
      <div className="input-label-group">
        <input
          type="radio"
          name="search"
          onClick={() => setSearchType("orders")}
        />
        <label htmlFor="orders">Orders</label>
      </div>
      <div className="input-label-group">
        <input
          type="radio"
          name="search"
          onClick={() => setSearchType("staff")}
        />
        <label htmlFor="staff">Staff</label>
      </div>
      <div className="input-label-group">
        <input
          type="radio"
          name="search"
          onClick={() => setSearchType("inventory")}
        />
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
