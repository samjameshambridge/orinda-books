import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PASSWORD_RESET_ERROR
} from "actions/types";

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: LOGOUT_SUCCESS }));
  };
};

export const resetPassword = password => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    let user = firebase.auth().currentUser;

    user
      .updatePassword(password)
      .then(() => {
        console.log("update successful");
      })
      .catch(err => {
        dispatch({ type: PASSWORD_RESET_ERROR, payload: err });
      });
  };
};
