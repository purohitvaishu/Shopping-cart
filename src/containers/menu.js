import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Cart from "./cart";
import Grocery from "./grocery";
import Home from "./home";
import Men from "./men";
import Navigation from "./navigation";
import Women from "./women";

class Menu extends Component {
  render() {
    return (
      <Router>
        <div id="box">
          <Navigation />
          <hr />

          <div id="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Women" component={Women} />
              <Route path="/Men" component={Men} />
              <Route path="/Grocery" component={Grocery} />
              <Route path="/Cart" component={Cart} />
              <Route render={() => <h1>404 Error</h1>} />
            </Switch>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default Menu;
