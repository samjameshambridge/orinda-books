import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AdminTitle from "components/titles/AdminTitle";
import AddOrderGroup from "components/admin/orders/AddOrderGroup";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import FilledTable from "components/admin/orders/table/filled/FilledTable";
import Modal from "components/modal/Modal";
import SearchInputGroup from "components/general/SearchInputGroup";
import UnfilledTable from "components/admin/orders/table/unfilled/UnfilledTable";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Orders({ uid, location: { pathname }, modal_open }) {
  if (!uid) return <Redirect to="/" />;

  let modal;
  if (modal_open) modal = <Modal />;

  return (
    <div className="admin-full-page-container">
      {modal}
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation pathname={pathname} />
      </div>
      <div className="admin-content-container orders-content-container">
        <AdminTitle value="Orders" />
        <AddOrderGroup />
        <div className="orders-tables-content">
          <div className="unfilled-orders-content">
            <h2>Unfilled</h2>
            <UnfilledTable />
            <SearchInputGroup placeholder="Search by Date" type="unfilled" />
          </div>
          <div className="filled-orders-content">
            <h2>Filled</h2>
            <FilledTable />
            <SearchInputGroup
              placeholder="Search by Date"
              type="filled"
              second
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Orders.propTypes = {
  uid: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  modal_open: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  },
  modal: { modal_open }
}) => {
  return {
    uid,
    modal_open
  };
};

export default connect(mapStateToProps)(Orders);
