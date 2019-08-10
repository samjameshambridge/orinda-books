import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import SearchIcon from "components/general/SearchIcon";

import { setSearchValue, setSecondarySearchValue } from "actions/searchActions";

function SearchInputGroup({
  firestore,
  placeholder,
  second,
  setSearchValue,
  setSecondarySearchValue,
  type
}) {
  useEffect(() => {
    return () => {
      // when the component dismounts, reset both search values
      setSearchValue("");
      setSecondarySearchValue("");
    };
  });

  function searchClickHandler() {
    // if user clicks search input that is active nothing happens
    if (document.querySelector(".active-input")) return;

    let input;

    // if second has been passed in as a prop, then this page has two search components
    // and the user has clicked the second search icon
    // else user has clicked on the first (or only) search icon
    second
      ? (input = document.querySelectorAll(".search-input")[1])
      : (input = document.querySelectorAll(".search-input")[0]);

    // set the second search input as the active one
    if (input) input.className = "active-input";

    document.addEventListener("click", function clickFunction(e) {
      // grab the active search input
      const activeInput = document.querySelector(".active-input");

      if (
        // if there is an active input, as long as the click target wasn't the active input or the search icon
        activeInput &&
        e.target !== activeInput &&
        e.target !== activeInput.nextElementSibling
      ) {
        // then reset the input value and remove it's active status
        activeInput.value = "";
        activeInput.className = "search-input";

        document.removeEventListener("click", clickFunction);
      }
    });
  }
  function onChangeHandler(e, bool) {
    bool
      ? setSecondarySearchValue(e.target.value)
      : setSearchValue(e.target.value);

    // depending on the type of the search
    // change the query to determine which NoSql database is being queried
    switch (type) {
      // for each collection, assume the user may be searching through one or more field
      case "inventory":
        firestore.get({
          collection: "books",
          where: ["author", "==", e.target.value],
          // sync the value into the redux state under the following name
          storeAs: "authorFiltered"
        });
        firestore.get({
          collection: "books",
          where: ["title", "==", e.target.value],
          storeAs: "titleFiltered"
        });

        break;

      case "unfilled":
        firestore.get({
          collection: "unfilledOrders",
          where: ["date", "==", e.target.value],
          storeAs: "unfilledFiltered"
        });

        break;

      case "filled":
        firestore.get({
          collection: "filledOrders",
          where: ["date", "==", e.target.value],
          storeAs: "filledFiltered"
        });

        break;

      default:
        return;
    }
  }

  return (
    <div className="search-group">
      {!second ? (
        <input
          className="search-input"
          onChange={e => onChangeHandler(e)}
          placeholder={placeholder}
          type="text"
        />
      ) : (
        <input
          className="search-input"
          onChange={e => onChangeHandler(e, true)}
          placeholder={placeholder}
          type="text"
        />
      )}

      <SearchIcon onClick={() => searchClickHandler()} />
    </div>
  );
}

SearchInputGroup.propTypes = {
  firestore: PropTypes.object,
  placeholder: PropTypes.string,
  second: PropTypes.bool,
  setSearchValue: PropTypes.func.isRequired,
  setSecondarySearchValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default compose(
  connect(
    null,
    {
      setSearchValue,
      setSecondarySearchValue
    }
  ),
  firestoreConnect()
)(SearchInputGroup);
