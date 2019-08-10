import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

import PlusIcon from "components/general/PlusIcon";

function AddMemberGroup({ toggleModal }) {
  function clickHandler() {
    // display the modal with type of 'add'
    toggleModal("add");
  }
  return (
    <div className="add-member-group" onClick={() => clickHandler()}>
      <h2>Add Member</h2>
      <PlusIcon />
    </div>
  );
}

AddMemberGroup.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    toggleModal
  }
)(AddMemberGroup);
