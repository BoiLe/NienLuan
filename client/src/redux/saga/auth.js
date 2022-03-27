import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { logInAPI, registerAPI } from "../../api/index.js";
import {
  loginSuccess,
  loginFailed,
  register,
  registerSuccess,
  registerFailed,
} from "../reducers/auth.js";

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const token = yield logInAPI(email, password);
    console.log("token", token.data.accsessToken);
    yield put(loginSuccess(token.data.accsessToken));
  } catch (error) {
    yield put(loginFailed(error));
  }
}
function* registerWithCredentials({ payload }) {
  try {
    yield registerAPI(payload);
    yield put(registerSuccess(payload));
  } catch (error) {
    yield put(registerFailed(error));
  }
}
function* onLogInStart() {
  yield takeLatest("user/login", logInWithCredentials);
}
function* onRegisterStart() {
  yield takeLatest("user/register", registerWithCredentials);
}
function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } });
}
function* onRegisterSuccess() {
  yield takeLatest("user/registerSuccess", logInAfterRegister);
}

function* usersaga() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
  ]);
}
export default usersaga;
