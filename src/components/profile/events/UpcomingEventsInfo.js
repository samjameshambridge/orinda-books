import React from "react";
import PropTypes from "prop-types";

import { getDate } from "helpers/dateFuncs";

import Spinner from "components/general/Spinner";

function UpcomingEventsInfo({ events }) {
  let sortedEvents, content;

  if (events) {
    const today = getDate(),
      todayReversed = today
        .split("/")
        .reverse()
        .join("");

    // filter out the dates which are in the past
    const noPastDates = events.filter(event => {
      let eventReversed = event.dateOf
        .split("/")
        .reverse()
        .join("");
      return eventReversed >= todayReversed;
    });

    // sort dates in order
    sortedEvents = noPastDates.sort((a, b) => {
      var aa = a.dateOf
        .split("/")
        .reverse()
        .join();

      var bb = b.dateOf
        .split("/")
        .reverse()
        .join();
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });

    content = (
      <div className="upcoming-events-content">
        <p>Next 3 events:</p>
        {sortedEvents.map(event => {
          const { id, dateOf, title } = event;

          return (
            <div key={id}>
              <p>
                {dateOf}: {title}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else
    content = (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  return (
    <div className="events-upcoming-container">
      <h2 className="font-secondary">Upcoming</h2>
      {content}
    </div>
  );
}

UpcomingEventsInfo.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      dateOf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default UpcomingEventsInfo;
