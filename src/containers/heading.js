import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <>
        <div id="trow">
          <div id="left">
            <b>Image</b>
          </div>
          <div id="middle">
            <div id="md1">
              <b>Product</b>
            </div>
            <div id="md2">
              <b>Quantity</b>
            </div>
            <div id="md3"></div>
          </div>
          <div id="right">
            <div id="md1">
              <b>Unitcost</b>
            </div>
            <div id="md2">
              <b>Total</b>
            </div>
            <div id="md3"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
