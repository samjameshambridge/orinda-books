import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal, setViewingItem } from "actions/modalActions";

import PlusIcon from "components/general/PlusIcon";

function DetailEventInfo({ detail_event, setViewingItem, toggleModal }) {
  let content;

  function clickHandler(e, event) {
    e.preventDefault();

    setViewingItem(event);
    toggleModal("view");
  }

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
    ? (content = (
        <div className="detail-event-container">
          {detail_event.map(item => {
            const { dateOf, title, time } = item;

            return (
              <div
                className="detail-event-group"
                onClick={e => clickHandler(e, item)}
                key={item.id}
              >
                <p className="event-date-label">{dateOf}</p>
                <p>{title}</p>
                <p>
                  <span>Starts at:</span> {time}
                </p>
              </div>
            );
          })}
          <PlusIcon onClick={() => toggleModal("add")} />
        </div>
      ))
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
  setViewingItem: PropTypes.func.isRequired,
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
    setViewingItem,
    toggleModal
  }
)(DetailEventInfo);
