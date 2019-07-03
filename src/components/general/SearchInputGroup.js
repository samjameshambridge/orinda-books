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
      setSearchValue("");
      setSecondarySearchValue("");
    };
  });

  function searchClickHandler() {
    if (document.querySelector(".active-input")) return;

    let input;

    second
      ? (input = document.querySelectorAll(".search-input")[1])
      : (input = document.querySelector(".search-input"));

    if (input) input.className = "active-input";

    document.addEventListener("click", function clickFunction(e) {
      const activeInput = document.querySelector(".active-input");

      if (
        activeInput &&
        e.target !== activeInput &&
        e.target !== activeInput.nextElementSibling
      ) {
        activeInput.value = "";
        activeInput.className = "search-input";

        document.removeEventListener("click", clickFunction);
      }
    });
  }
  function onChangeHandler(e) {
    setSearchValue(e.target.value);

    switch (type) {
      case "inventory":
        firestore.get({
          collection: "books",
          where: ["author", "==", e.target.value],
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
          onChange={e => {
            onChangeHandler(e);
            setSecondarySearchValue(e.target.value);
          }}
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
