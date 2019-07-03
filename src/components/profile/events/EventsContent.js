import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import EventsCalendar from "components/profile/events/EventsCalendar";
import DetailEventInfo from "components/profile/events/DetailEventInfo";
import UpcomingEventsInfo from "components/profile/events/UpcomingEventsInfo";

function EventsContent({ events }) {
  return (
    <div className="profile-related-content-container events-content-container">
      <EventsCalendar events={events} />
      <div className="event-info-container">
        <UpcomingEventsInfo events={events} />
        <DetailEventInfo />
      </div>
    </div>
  );
}

EventsContent.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      dateOf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = ({
  firestore: {
    ordered: { events }
  }
}) => {
  if (events) {
    return {
      events
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(EventsContent);
