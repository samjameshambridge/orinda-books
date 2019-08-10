import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSearchType } from "actions/searchActions";

function SearchOptions({ setSearchType }) {
  useEffect(() => {
    return () => {
      // on dismounting of the search options, set the type to null
      // this prevents premature type determination on return to the page
      setSearchType(null);
    };
  });

  function clickHandler(e) {
    // sync search type to redux store to allow search results to sync into which input was clicked
    setSearchType(e.target.id);
  }

  return (
    <React.Fragment>
      <div className="input-label-group">
        <input
          type="radio"
          name="settings"
          id="orders"
          onClick={e => clickHandler(e)}
        />
        <label htmlFor="orders">Orders</label>
      </div>
      <div className="input-label-group">
        <input
          type="radio"
          name="settings"
          id="staff"
          onClick={e => clickHandler(e)}
        />
        <label htmlFor="staff">Staff</label>
      </div>
      <div className="input-label-group">
        <input
          type="radio"
          name="settings"
          id="inventory"
          onClick={e => clickHandler(e)}
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
