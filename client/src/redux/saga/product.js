import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import { getProductRequest, getProductSuccess } from "../reducers/product";

function* fetchProductSaga(action) {
  const products = yield call(api.fetchProduct);
  console.log("[product]", products);
  yield put(getProductSuccess(products.data.Products));
  
}

function* productsaga() {
  yield takeLatest("product/getProductRequest", fetchProductSaga);
}
export default productsaga; 
