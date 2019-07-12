import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

import PlusIcon from "components/general/PlusIcon";

function DetailEventInfo({ detail_event, toggleModal }) {
  let content;

  !detail_event
    ? (content = (
        <React.Fragment>
          <h3 className="empty-detail-event-title font-secondary">
            Click on a calendar event to view details or add an event!
          </h3>
          <PlusIcon onClick={() => toggleModal("add")} />
        </React.Fragment>
      ))
    : detail_event.length
    ? (content = detail_event.map(event => {
        const { dateOf, title } = event;

        return (
          <div className="detail-event-group" key={event.id}>
            <p>{dateOf}</p>
            <p>{title}</p>
          </div>
        );
      }))
    : (content = (
        <div className="empty-detail-event-group">
          <h3 className="empty-detail-event-title font-secondary">
            No events currently planned on this date!
          </h3>
          <PlusIcon onClick={() => toggleModal("add")} />
        </div>
      ));

  return (
    <div className="event-specific-container">
      <h2 className="font-secondary">Event</h2>
      {content}
    </div>
  );
}

DetailEventInfo.propTypes = {
  detail_event: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ events: { detail_event } }) => {
  return {
    detail_event
  };
};

export default connect(
  mapStateToProps,
  {
    toggleModal
  }
)(DetailEventInfo);
