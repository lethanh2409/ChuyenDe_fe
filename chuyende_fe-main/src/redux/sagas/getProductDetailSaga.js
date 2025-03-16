import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_PRODUCT_DETAIL_REQUEST,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILURE,
} from "../actions/getProductDetailAction.js";

import axios from "axios";

// Hàm gọi API lấy chi tiết sản phẩm
function* fetchProductDetail(action) {
    try {
        const { data } = yield call(axios.get, `http://localhost:9999/api/product/${action.payload}`);
        yield put({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        yield put({
            type: GET_PRODUCT_DETAIL_FAILURE,
            payload: error.response ? error.response.data.message : error.message,
        });
    }
}

export function* watchGetProductDetail() {
    yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, fetchProductDetail);
}
