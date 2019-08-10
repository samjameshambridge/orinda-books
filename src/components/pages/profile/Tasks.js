import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/titles/ProfileTitle";
import TaskModal from "components/profile/tasks/modal/TaskModal";
import TasksContent from "components/profile/tasks/TasksContent";

function Tasks({ modal_open, uid }) {
  if (!uid) return <Redirect to="/" />;

  let modal;
  if (modal_open) modal = <TaskModal uid={uid} />;

  return (
    <div className="full-page-container">
      {modal}
      <IconSidebar />
      <div className="main-section-container">
        <ErrorBoundary>
          <ProfileTitle value="Tasks" />
          <TasksContent />
        </ErrorBoundary>
      </div>
    </div>
  );
}

Tasks.propTypes = {
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

export default connect(mapStateToProps)(Tasks);
