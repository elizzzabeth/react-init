import { all, fork } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import watchLoginRequest from "./auth/login";

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchLoginRequest)]);
}
