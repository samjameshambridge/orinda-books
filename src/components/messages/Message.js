import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MessageXButton from "components/messages/MessageXButton";
import OrdersMessageBody from "components/messages/OrdersMessageBody";
import Spinner from "components/general/Spinner";

function Message({ message_action, pathname }) {
  let messageContent;

  if (message_action) {
    let message;

    switch (pathname) {
      case "/orders":
        message = (
          <OrdersMessageBody pathname={pathname} message={message_action} />
        );

        break;

      default:
        message = null;
    }

    messageContent = (
      <React.Fragment>
        <MessageXButton />
        <div className="message-content text-theme-green bg-theme-white">
          {message}
        </div>
      </React.Fragment>
    );
  } else {
    messageContent = <Spinner />;
  }

  return <div className="message">{messageContent}</div>;
}

Message.propTypes = {
  message_action: PropTypes.object,
  pathname: PropTypes.string.isRequired
};

const mapStateToProps = ({ orders: message_action }) => {
  return {
    message_action
  };
};

export default connect(mapStateToProps)(Message);
