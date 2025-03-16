import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../actions/getProductAction.js";

const initialState = {
  data: [], // ✅ Đúng theo state mà component sẽ sử dụng
  loading: false,
  error: null,
};

const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProductReducer;
