import React, { Component } from "react";

import GroceryItem from "../components/groceryItem";

class Grocery extends Component {
  render() {
    return (
      <div id="box-items">
        <h2>Grocery Items</h2>
        <GroceryItem />
      </div>
    );
  }
}

export default Grocery;
