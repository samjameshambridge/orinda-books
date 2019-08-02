import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AdminTitle from "components/titles/AdminTitle";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import SearchResults from "components/admin/search/SearchResults";
import SearchSettings from "components/admin/search/SearchSettings";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Search({ uid }) {
  if (!uid) return <Redirect to="/" />;

  return (
    <div className="admin-full-page-container">
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation />
      </div>
      <div className="admin-content-container">
        <ErrorBoundary>
          <AdminTitle value="Search" />
          <SearchSettings />
          <div className="search-results-group">
            <SearchResults />
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}

Search.propTypes = {
  uid: PropTypes.string
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  }
}) => {
  return {
    uid
  };
};

export default connect(mapStateToProps)(Search);
