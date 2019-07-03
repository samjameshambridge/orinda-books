import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "reducers/authReducer";
import editReducer from "reducers/editReducer";
import eventReducer from "reducers/eventReducer";
import searchReducer from "reducers/searchReducer";
import modalReducer from "reducers/modalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  edit: editReducer,
  events: eventReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  search: searchReducer,
  modal: modalReducer
});

export default rootReducer;
