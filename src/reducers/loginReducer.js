import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  LOG_OUT
} from "../actions/loginActions";

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  isLogOut: false,
  loginError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError
      };

    case LOG_OUT:
      return {
        ...state,
        isLogOut: action.isLogOut
      };

    default:
      return state;
  }
}
