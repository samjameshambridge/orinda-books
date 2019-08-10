import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";

import InventoryItem from "components/admin/inventory/table/InventoryItem";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function SearchTable({ authorFiltered, titleFiltered, searchVal }) {
  // isLoaded function determines if the fetch request is processing
  // isEmpty determines if the fetch request has returned empty
  return (
    <tbody>
      {!isLoaded(authorFiltered) && !isLoaded(titleFiltered) ? (
        <tr className="spinner-row">
          <td>
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(authorFiltered) && isEmpty(titleFiltered) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>{searchVal} returned no results!</h4>
          </td>
        </tr>
      ) : authorFiltered.length ? (
        authorFiltered.map(item => {
          return <InventoryItem item={item} key={item.id} />;
        })
      ) : (
        titleFiltered.map(item => {
          return <InventoryItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

SearchTable.propTypes = {
  authorFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  searchVal: PropTypes.string.isRequired,
  titleFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  )
};

const mapStateToProps = ({
  firestore: {
    ordered: { authorFiltered, titleFiltered }
  }
}) => {
  if (authorFiltered && titleFiltered) {
    return {
      authorFiltered,
      titleFiltered
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(SearchTable);
