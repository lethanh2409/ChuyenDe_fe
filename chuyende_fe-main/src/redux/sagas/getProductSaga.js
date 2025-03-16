import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  getProductsFailure,
  getProductsSuccess,
} from "../actions/getProductAction.js";

function fetchProductsApi() {
  return axios.get("http://localhost:9999/api/product/all");
}

function* getProductsSaga() {
  try {
    const response = yield call(fetchProductsApi);
    yield put(getProductsSuccess(response.data.data));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

export function* getProductProducts() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsSaga);
}
