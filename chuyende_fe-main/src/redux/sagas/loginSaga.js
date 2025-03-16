import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, loginFailure, loginSuccess } from "../actions/loginAction.js";

function* handleLogin(action) {
  try {
    const response = yield call(fetch, "http://localhost:9999/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });

    if (!response.ok) {
      throw new Error("Sai email hoặc mật khẩu!");
    }

    const data = yield response.json();
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
