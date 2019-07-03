import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Sidebar from "components/navigation/Sidebar";
import Widgets from "components/widgets/Widgets";

function Dashboard({ auth: { uid } }) {
  if (!uid) return <Redirect to="/" />;

  return (
    <div className="full-page-container dashboard-container">
      <Sidebar />
      <Widgets />
    </div>
  );
}

Dashboard.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = ({ firebase: { auth } }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
