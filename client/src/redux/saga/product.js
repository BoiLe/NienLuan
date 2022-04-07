import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import * as api from "../../api";
import {
  createProductFailure,
  createProductRequest,
  createProductSuccess,
  deleteProductFailure,
  deleteProductSuccess,
  getProductRequest,
  getProductSuccess,
} from "../reducers/product";

//render API saga
function* fetchProductSaga(action) {
  const products = yield call(api.fetchProduct);
  console.log(products);
  yield put(getProductSuccess(products.data.Products));
}
function* getproductsaga() {
  yield takeLatest("product/getProductRequest", fetchProductSaga);
}
// delete API saga
function* fetchdeleteProductSaga({ payload }) {
  try {
    yield api.deleteProduct(payload);
  } catch (error) {
    yield put(deleteProductFailure());
  }
}
function* onDeleteproductsaga() {
  yield takeLatest("product/deleteProductRequest", fetchdeleteProductSaga);
}
// create API saga
function* createProductSaga({ payload }) {
  try {
    yield api.createProduct(payload);
    yield put(createProductSuccess(payload));
  } catch (error) {
    yield put(createProductFailure());
  }
}
function* createproductsaga() {
  yield takeLatest("product/createProductRequest", createProductSaga);
}
// Update API saga
function* productsaga() {
  yield all([
    call(createproductsaga),
    call(getproductsaga),
    call(onDeleteproductsaga),
  ]);
}

export default productsaga;
