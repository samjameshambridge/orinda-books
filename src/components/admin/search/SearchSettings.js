import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { setSearchValue } from "actions/searchActions";

import SearchIcon from "components/general/SearchIcon";
import SearchOptions from "components/admin/search/SearchOptions";

function SearchSettings({
  firestore,
  search_type,
  search_value,
  setSearchValue
}) {
  switch (search_type) {
    case "staff":
      firestore.get({
        collection: "staff",
        where: ["firstName", "==", search_value],
        storeAs: "fullNameFiltered"
      });
      firestore.get({
        collection: "staff",
        where: ["fullName", "==", search_value],
        storeAs: "firstNameFiltered"
      });

      break;

    case "inventory":
      firestore.get({
        collection: "books",
        where: ["title", "==", search_value],
        storeAs: "titleFiltered"
      });
      firestore.get({
        collection: "books",
        where: ["author", "==", search_value],
        storeAs: "authorFiltered"
      });

      break;

    case "orders":
      firestore.get({
        collection: "unfilledOrders",
        where: ["date", "==", search_value],
        storeAs: "unfilledOrdersFiltered"
      });
      firestore.get({
        collection: "filledOrders",
        where: ["filledDate", "==", search_value],
        storeAs: "filledOrdersFiltered"
      });

      break;

    default:
      break;
  }

  return (
    <React.Fragment>
      <div className="search-bar-group">
        <input
          type="text"
          name="search"
          onChange={e => setSearchValue(e.target.value)}
          placeholder={
            search_type === "orders"
              ? "search orders by date..."
              : search_type === "inventory"
              ? "search by title or author..."
              : search_type === "staff"
              ? "search by member name..."
              : "select a search option!"
          }
          disabled={search_type ? false : true}
        />
        <SearchIcon />
      </div>
      <div className="search-options">
        <SearchOptions />
      </div>
    </React.Fragment>
  );
}

SearchSettings.propTypes = {
  firestore: PropTypes.object,
  search_type: PropTypes.string,
  search_value: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired
};

const mapStateToProps = ({ search: { search_type, search_value } }) => {
  return {
    search_type,
    search_value
  };
};

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    { setSearchValue }
  )
)(SearchSettings);
