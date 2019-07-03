import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import FilledItem from "components/admin/orders/table/filled/FilledOrderItem";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function SearchTable({ filledFiltered, searchVal }) {
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
