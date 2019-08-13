import { LOADING, LOGIN_ERROR, PASSWORD_RESET_ERROR } from "actions/types";

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: LOADING, payload: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOADING, payload: false });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
        dispatch({ type: LOADING, payload: false });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut();
  };
};

export const resetPassword = password => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    let user = firebase.auth().currentUser;

    user.updatePassword(password).catch(err => {
      dispatch({ type: PASSWORD_RESET_ERROR, payload: err });
    });
  };
};
