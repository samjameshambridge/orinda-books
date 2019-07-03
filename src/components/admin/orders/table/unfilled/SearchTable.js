import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import UnfilledItem from "components/admin/orders/table/unfilled/UnfilledOrderItem";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function SearchTable({ unfilledFiltered, searchVal }) {
  return (
    <tbody>
      {!isLoaded(unfilledFiltered) ? (
        <tr className="spinner-row">
          <td className="spinner-cell">
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(unfilledFiltered) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>{searchVal} returned no results!</h4>
          </td>
        </tr>
      ) : (
        unfilledFiltered.map(item => {
          return <UnfilledItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

const mapStateToProps = ({
  firestore: {
    ordered: { unfilledFiltered }
  }
}) => {
  if (unfilledFiltered) {
    return {
      unfilledFiltered
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(SearchTable);
