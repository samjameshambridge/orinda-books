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
  // subscribe to changes in the search_type to determine which search option was clicked
  // i.e: is the user looking to search through staff or the inventory or the orders?
  switch (search_type) {
    case "staff":
      // query firebase NoSql database to return where the first name is equal to the value entered into the input
      firestore.get({
        collection: "staff",
        where: ["firstName", "==", search_value],
        storeAs: "fullNameFiltered"
      });
      // also query if the full name equals the value entered into the search input
      firestore.get({
        collection: "staff",
        where: ["fullName", "==", search_value],
        // within the redux store, cache the returned data from this query under the name 'firstNameFiltered'
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
            // depending on what search option the user has selected
            // the placeholder value for the input specifies the type of data to enter
            search_type === "orders"
              ? "search orders by date..."
              : search_type === "inventory"
              ? "search by title or author..."
              : search_type === "staff"
              ? "search by member name..."
              : "select a search option!"
          }
          // if the user hasn't selected a database they want to search
          // disable the search bar
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
