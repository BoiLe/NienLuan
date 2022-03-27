import { all } from "redux-saga/effects";
import usersaga from "./auth";

import productsaga from "./product";

function* rootSaga() {
  yield all([productsaga(), usersaga()]);
}
export default rootSaga;
