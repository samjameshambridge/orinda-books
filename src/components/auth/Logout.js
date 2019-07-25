import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

function Logout({ toggleModal }) {
  return (
    <div className="logout" onClick={() => toggleModal()}>
      <span>Logout</span> <i className="fas fa-power-off" />
    </div>
  );
}

Logout.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal }
)(Logout);
