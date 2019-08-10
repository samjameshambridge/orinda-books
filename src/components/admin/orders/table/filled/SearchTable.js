import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import FilledItem from "components/admin/orders/table/filled/FilledOrderItem";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function SearchTable({ filledFiltered, searchVal }) {
  // isLoaded determines if the fetch firebase request is being processed
  // is empty determines if the fetch firebase request has returned empty
  // if the request is loading, display the spinner
  // if the request is empty, display a title saying so
  // else iterate over the data and display it
  return (
    <tbody>
      {!isLoaded(filledFiltered) ? (
        <tr className="spinner-row">
          <td className="spinner-cell">
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(filledFiltered) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>{searchVal} returned no results!</h4>
          </td>
        </tr>
      ) : (
        filledFiltered.map(item => {
          return <FilledItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

const mapStateToProps = ({
  firestore: {
    ordered: { filledFiltered }
  }
}) => {
  if (filledFiltered) {
    return {
      filledFiltered
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(SearchTable);
