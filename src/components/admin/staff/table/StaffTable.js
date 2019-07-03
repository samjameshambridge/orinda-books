import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import StaffListMember from "components/admin/staff/table/StaffListMember";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function StaffList({ data }) {
  return (
    <table className="staff-table">
      <thead>
        <tr className="staff-table-headings">
          <td />
          <td>Name</td>
          <td>Position</td>
          <td>DOB</td>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map(member => {
            return <StaffListMember member={member} key={member.id} />;
          })
        ) : (
          <tr className="spinner-row">
            <td>
              <Spinner />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => {
  if (state.firestore.ordered.staff) {
    return {
      data: state.firestore.ordered.staff
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "staff", orderBy: "surname" }])
)(StaffList);
