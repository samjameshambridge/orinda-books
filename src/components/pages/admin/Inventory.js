import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setSearchValue } from "actions/searchActions";

import AdminTitle from "components/titles/AdminTitle";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import InventoryTable from "components/admin/inventory/table/InventoryTable";
import Modal from "components/modal/Modal";
import SearchInputGroup from "components/general/SearchInputGroup";
import SummaryInfo from "components/admin/inventory/SummaryInfo";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Inventory({ uid, modal_open }) {
  // if the user is not authenticated, redirect him the login page
  if (!uid) return <Redirect to="/" />;

  let component;
  // if redux store says that the modal should be open, display the modal
  if (modal_open) component = <Modal />;

  return (
    <div className="admin-full-page-container">
      {component}
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation />
      </div>
      <div className="admin-content-container inventory-content-container">
        <ErrorBoundary>
          <AdminTitle value="Inventory" />
          <SummaryInfo />
          <InventoryTable />
          <SearchInputGroup
            placeholder="Search by Author or Title"
            type="inventory"
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}

Inventory.propTypes = {
  uid: PropTypes.string,
  modal_open: PropTypes.bool.isRequired,
  setSearchValue: PropTypes.func.isRequired
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

export default connect(
  mapStateToProps,
  {
    setSearchValue
  }
)(Inventory);
