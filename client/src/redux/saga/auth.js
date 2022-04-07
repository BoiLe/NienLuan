import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { logInAPI, registerAPI } from "../../api/index.js";
import { useNavigate } from "react-router-dom";
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
    console.log("Data", token);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailed(error));
  }
}
function* registerWithCredentials({
  payload: { email, password, phone_number },
}) {
  try {
    yield registerAPI(email, password, phone_number);
    yield put(registerSuccess());
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
// function* logInAfterRegister({ payload: { email, password } }) {
//   yield logInWithCredentials({ payload: { email, password } });
// }
// function* onRegisterSuccess() {
//   yield takeLatest("user/registerSuccess", logInAfterRegister);
// }

function* usersaga() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    // call(onRegisterSuccess),
  ]);
}
export default usersaga;
