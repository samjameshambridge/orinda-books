import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import UnfilledOrderItem from "components/admin/orders/table/unfilled/UnfilledOrderItem";
import Spinner from "components/general/Spinner";

function NoSearchTable({ unfilledOrders }) {
  return (
    <tbody>
      {!isLoaded(unfilledOrders) ? (
        <tr className="spinner-row">
          <td className="spinner-cell">
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(unfilledOrders) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>You have no Unfilled Orders</h4>
          </td>
        </tr>
      ) : (
        unfilledOrders.map(item => {
          return <UnfilledOrderItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

NoSearchTable.propTypes = {
  unfilledOrders: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({
  firestore: {
    ordered: { unfilledOrders }
  }
}) => {
  if (unfilledOrders) {
    return {
      unfilledOrders
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "unfilledOrders" }])
)(NoSearchTable);
