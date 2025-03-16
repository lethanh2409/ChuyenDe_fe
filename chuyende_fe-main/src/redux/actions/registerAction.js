export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
});

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});
