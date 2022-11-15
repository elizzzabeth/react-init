import { combineReducers } from "redux";

import auth, { AuthState } from "./auth";

export interface RootReducer {
  auth: AuthState;
}

const reducers = {
  auth
};

export default combineReducers<RootReducer>(reducers);
