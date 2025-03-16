import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_PRODUCT_REQUEST, addProductFailure, addProductSuccess } from "../actions/addProductAction.js";

// Hàm gọi API
const addProductAPI = async (product) => {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Có lỗi xảy ra khi thêm sản phẩm!");
  }

  return await response.json();
};

// Saga xử lý thêm sản phẩm
function* addProductSaga(action) {
  try {
    const product = yield call(addProductAPI, action.payload);
    yield put(addProductSuccess(product));
    alert("Sản phẩm đã được thêm thành công!");
  } catch (error) {
    yield put(addProductFailure(error.message));
    alert("Có lỗi xảy ra, vui lòng thử lại!");
  }
}

// Lắng nghe action
export function* watchAddProduct() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addProductSaga);
}
