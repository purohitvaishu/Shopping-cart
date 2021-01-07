import * as type from "../actions/loginActions";
import reducer from "./loginReducer";

describe("Login reducer", () => {
  const initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    isLogOut: false
  };

  it("Should login pending", () => {
    const isLoginPending = true;

    expect(
      reducer(initialState, {
        type: type.SET_LOGIN_PENDING,
        isLoginPending
      })
    ).toEqual({ ...initialState, isLoginPending: true });
  });

  it("Should login success", () => {
    const isLoginSuccess = true;

    expect(
      reducer(initialState, {
        type: type.SET_LOGIN_SUCCESS,
        isLoginSuccess
      })
    ).toEqual({ ...initialState, isLoginSuccess: true });
  });

  it("Should login error", () => {
    const loginError = true;

    expect(
      reducer(initialState, {
        type: type.SET_LOGIN_ERROR,
        loginError
      })
    ).toEqual({ ...initialState, loginError: true });
  });

  it("Should logout", () => {
    const isLogOut = true;

    expect(
      reducer(initialState, {
        type: type.LOG_OUT,
        isLogOut
      })
    ).toEqual({ ...initialState, isLogOut: true });
  });
});
