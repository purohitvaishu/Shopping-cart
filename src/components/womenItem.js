import React, { Component } from "react";

import "../style.css";
import ShowItems from "./showItems";
import WomenItems from "../db/women";

class App extends Component {
  render() {
    return (
      <div id="box-container">
        <div className="card">
          <ul id="row">
            {WomenItems.map(post => (
              <ShowItems
                key={post.product}
                product={post.product}
                unitcost={post.unitcost}
                img={post.img}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
