import { SET_ORDER_PRODUCT } from "../actions/orderAction.js";

const initialState = {
    orderProduct: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_PRODUCT:
            return { ...state, orderProduct: action.payload };
        default:
            return state;
    }
};

export default orderReducer;
