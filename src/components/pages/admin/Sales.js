import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AdminTitle from "components/titles/AdminTitle";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import Modal from "components/modal/Modal";
import SalesTable from "components/admin/sales/SalesTable";
import SalesGraph from "components/admin/sales/SalesGraph";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Sales({ modal_open, uid }) {
  if (!uid) return <Redirect to="/" />;

  let component;
  if (modal_open) component = <Modal />;

  return (
    <div className="admin-full-page-container">
      {component}
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation />
      </div>
      <div className="admin-content-container">
        <ErrorBoundary>
          <AdminTitle value="Sales" />
          <div className="sales-page-content">
            <div className="recent-sales-table-container">
              <h2>Recent</h2>
              <SalesTable />
            </div>
            <div className="sales-graph-container">
              <h2>Weekly Sales</h2>
              <SalesGraph />
            </div>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}

Sales.propTypes = {
  uid: PropTypes.string,
  modal_open: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  },
  modal: { modal_open }
}) => {
  return {
    modal_open,
    uid
  };
};

export default connect(mapStateToProps)(Sales);
