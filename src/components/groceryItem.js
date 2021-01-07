import React, { Component } from "react";

import "../style.css";
import GroceryItem from "../db/grocery";
import ShowItems from "./showItems";

class App extends Component {
  render() {
    return (
      <div id="box-container">
        <div className="card">
          <ul id="row">
            {GroceryItem.map(post => (
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
