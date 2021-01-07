import {
  setLoginSuccess,
  setLoginError,
  setLoginPending
} from "../actions/loginActions";

export async function login(email, password) {
  setLoginPending(true);
  if (email === "admin@example.com" && password === "admin") {
    return setLoginSuccess(true);
  } else {
    return setLoginError(new Error("Invalid email and password"));
  }
}
