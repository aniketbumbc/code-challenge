import { all } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* rootSaga() {
  yield all([helloSaga()]);
}
