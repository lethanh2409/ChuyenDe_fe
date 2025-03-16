import {
    GET_PRODUCT_DETAIL_REQUEST,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILURE,
} from "../actions/getProductDetailAction.js";


const initialState = {
    product: null,
    loading: false,
    error: null,
};

const getProductDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case GET_PRODUCT_DETAIL_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default getProductDetailReducer;


