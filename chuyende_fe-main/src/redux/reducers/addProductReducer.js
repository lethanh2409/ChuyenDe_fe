import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "../actions/addProductAction.js";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: [...state.products, action.payload] };
    case ADD_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default addProductReducer;
