import React from "react";

import LogoutModalContent from "components/auth/LogoutModalContent";
import ModalXButton from "components/modal/ModalXButton";

function LogoutModal() {
  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal-container">
        <ModalXButton />
        <LogoutModalContent />
      </div>
    </div>
  );
}

export default LogoutModal;
