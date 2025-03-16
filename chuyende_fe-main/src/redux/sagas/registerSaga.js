import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { REGISTER_REQUEST, registerFailure, registerSuccess } from "../actions/registerAction.js";

function* registerUser(action) {
  try {
    const response = yield call(axios.post, "http://localhost:9999/api/auth/sign-up", action.payload);
    yield put(registerSuccess(response.data.message || "Đăng ký thành công!"));
  } catch (error) {
    yield put(registerFailure(error.response?.data?.message || "Lỗi đăng ký!"));
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, registerUser);
}
