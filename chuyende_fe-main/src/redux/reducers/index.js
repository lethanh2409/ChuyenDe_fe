import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer.js";
import registerReducer from "./registerReducer.js";
import addProductReducer from "./addProductReducer.js";
import getProductReducer from "./getProductReducer.js";
import getProductDetailReducer  from "./getProductDetailReducer.js";
import orderReducer from "./orderReducer.js";  // Import orderReducer

const rootReducer = combineReducers({
  auth: loginReducer,
  register: registerReducer,
  addProduct: addProductReducer,
  getProduct: getProductReducer,
  productDetail: getProductDetailReducer,
  order: orderReducer,  // Thêm reducer vào store
});

export default rootReducer;
