import React, { Component } from "react";

import "../style.css";
import { login } from "./login";
import SideBar from "../containers/menu";
import store from "../store";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    let value = await login(email, password);
    this.setState(store.dispatch(value));
  }

  render() {
    let { email, password, isLoginSuccess, loginError } = this.state;

    if (isLoginSuccess) {
      return (
        <>
          <div className="heading">Shopping Cart</div>
          <SideBar />
        </>
      );
    } else {
      return (
        <>
          <div className="heading">Login</div>
          <div id="login-box">
            {loginError && <div>{loginError.message}</div>}
            <form name="loginForm" onSubmit={this.onSubmit} id="loginForm">
              <div className="form-group-collection">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={e => this.setState({ email: e.target.value })}
                    value={email}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                  />
                </div>
              </div>

              <input type="submit" value="Login" />
            </form>
          </div>
        </>
      );
    }
  }
}

export default LoginForm;
