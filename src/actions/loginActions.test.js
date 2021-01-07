import * as actions from "./loginActions";

describe("Login actions", () => {
  it("Should login pending", () => {
    const isLoginPending = true;

    const expectedAction = {
      type: actions.SET_LOGIN_PENDING,
      isLoginPending
    };

    expect(actions.setLoginPending(isLoginPending)).toEqual(expectedAction);
  });

  it("Should login success", () => {
    const isLoginSuccess = true;

    const expectedAction = {
      type: actions.SET_LOGIN_SUCCESS,
      isLoginSuccess
    };

    expect(actions.setLoginSuccess(isLoginSuccess)).toEqual(expectedAction);
  });

  it("Sholuld login error", () => {
    const loginError = true;

    const expectedAction = {
      type: actions.SET_LOGIN_ERROR,
      loginError
    };

    expect(actions.setLoginError(loginError)).toEqual(expectedAction);
  });

  it("Should logout user", () => {
    const isLogOut = true;

    const expectedAction = {
      type: actions.LOG_OUT,
      isLogOut
    };

    expect(actions.logOut(isLogOut)).toEqual(expectedAction);
  });
});
