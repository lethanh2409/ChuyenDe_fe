import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga.js";
import { registerSaga } from "./registerSaga.js";
import { watchAddProduct } from "./addProductSaga.js";
import { getProductProducts } from "./getProductSaga.js";
import {watchGetProductDetail} from "./getProductDetailSaga.js";

export function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    watchAddProduct(),
    getProductProducts(),
    watchGetProductDetail(),
  ]);
}
