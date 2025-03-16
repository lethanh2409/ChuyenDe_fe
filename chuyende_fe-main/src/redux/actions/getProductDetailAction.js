export const GET_PRODUCT_DETAIL_REQUEST = "GET_PRODUCT_DETAIL_REQUEST";
export const GET_PRODUCT_DETAIL_SUCCESS = "GET_PRODUCT_DETAIL_SUCCESS";
export const GET_PRODUCT_DETAIL_FAILURE = "GET_PRODUCT_DETAIL_FAILURE";

export const getProductDetailRequest = (productId) => ({
    type: GET_PRODUCT_DETAIL_REQUEST,
    payload: productId,
});

export const getProductDetailSuccess = (product) => ({
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: product,
});

export const getProductDetailFailure = (error) => ({
    type: GET_PRODUCT_DETAIL_FAILURE,
    payload: error,
});
