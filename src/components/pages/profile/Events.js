import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import EventsContent from "components/profile/events/EventsContent";
import EventsModal from "components/profile/events/modal/EventsModal";
import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/general/ProfileTitle";

function Events({ modal_open, uid }) {
  if (!uid) return <Redirect to="/" />;

  let modal;
  if (modal_open) modal = <EventsModal />;

  return (
    <div className="full-page-container">
      {modal}
      <IconSidebar />
      <div className="main-section-container">
        <ProfileTitle value="Events" />
        <EventsContent />
      </div>
    </div>
  );
}

Events.propTypes = {
  modal_open: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired
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

export default connect(mapStateToProps)(Events);
