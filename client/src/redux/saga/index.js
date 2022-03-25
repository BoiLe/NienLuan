import { all } from "redux-saga/effects";

import productsaga from "./product";

function* rootSaga() {
  yield all([productsaga()]);
}
export default rootSaga;
