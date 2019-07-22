import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  setViewingItem,
  setModalType,
  toggleModal
} from "actions/modalActions";

function EditTaskIcon({
  modal,
  task,
  toggleModal,
  setModalType,
  setViewingItem
}) {
  function clickHandler() {
    setViewingItem(task);
    modal ? setModalType("edit") : toggleModal("edit");
  }

  return <i className="fas fa-pen" onClick={() => clickHandler()} />;
}

EditTaskIcon.propTypes = {
  modal: PropTypes.bool,
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    notes: PropTypes.string
  }),
  toggleModal: PropTypes.func.isRequired,
  setModalType: PropTypes.func.isRequired,
  setViewingItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal, setModalType, setViewingItem }
)(EditTaskIcon);
