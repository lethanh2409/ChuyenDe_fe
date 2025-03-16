import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actions/registerAction.js";

const initialState = {
  loading: false,
  message: "",
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, message: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
