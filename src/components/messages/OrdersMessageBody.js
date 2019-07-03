// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import { closeMessage } from "actions/ordersActions";

// import CloseMessageButton from "components/buttons/CloseMessageButton";

// function OrdersMessageBody({ closeMessage, message_action }) {
//   let messageBody;
//   switch (message_action) {
//     case "ADD_ORDER":
//       messageBody = "Order added to unfilled orders.";

//       break;

//     case "REMOVE_FILLED":
//       messageBody = "Order removed from database.";

//       break;

//     default:
//       messageBody = "";
//   }

//   return (
//     <React.Fragment>
//       <i className="far fa-check-circle fa-7x" />
//       <h2>Success!</h2>
//       <p>{messageBody}</p>
//       <CloseMessageButton onClick={() => closeMessage()} />
//     </React.Fragment>
//   );
// }

// OrdersMessageBody.propTypes = {
//   closeMessage: PropTypes.func.isRequired,
//   message_action: PropTypes.object
// };

// export default connect(
//   null,
//   {
//     closeMessage
//   }
// )(OrdersMessageBody);
