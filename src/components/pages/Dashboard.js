import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import LogoutModal from "components/auth/LogoutModal";
import Sidebar from "components/navigation/Sidebar";
import Widgets from "components/widgets/Widgets";

function Dashboard({ auth: { uid }, modal_open }) {
  // if the user is not authenticated, redirect them to the login page
  if (!uid) return <Redirect to="/" />;

  let content;
  // if the redux store says the modal should be open then display the modal
  if (modal_open) content = <LogoutModal />;

  return (
    <div className="full-page-container dashboard-container">
      {content}
      <ErrorBoundary>
        <Sidebar />
        <Widgets />
      </ErrorBoundary>
    </div>
  );
}

Dashboard.propTypes = {
  auth: PropTypes.object,
  modal_open: PropTypes.bool
};

const mapStateToProps = ({ firebase: { auth }, modal: { modal_open } }) => {
  return { auth, modal_open };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
