import { take } from "redux-saga/effects";
import { LOGIN } from "src/redux/actions/auth";
import { LoginRequestTypes } from "src/redux/actions/auth/types";

function* watchLoginRequest() {
  while (true) {
    const {
      // eslint-disable-next-line
            payload: {username, password},
    }: IActionType<LoginRequestTypes> = yield take(LOGIN.REQUEST);
    try {
      // eslint-disable-next-line
        } catch (e) {

        }
  }
}

export default watchLoginRequest;
