import reducer from "./cartReducer";
import * as type from "../actions/cartActions";

describe("Cart Reducer", () => {
  const initialState = {
    cart: [
      {
        product: "T-Shirt",
        quantity: 4,
        unitcost: 300,
        img: "../t-shirt.jpeg"
      }
    ]
  };

  it("Should handle add to cart action", () => {
    const product = "T-Shirt",
      quantity = 2,
      unitcost = 300,
      img = "/t-shirt";

    let cart = [
      ...initialState.cart,
      { product: "T-Shirt", quantity: 2, unitcost: 300, img: "/t-shirt" }
    ];

    expect(
      reducer(initialState, {
        type: type.ADD_TO_CART,
        payload: { product, quantity, unitcost, img }
      })
    ).toEqual({
      ...initialState,
      cart: cart
    });
  });

  it("Should handle update to cart action", () => {
    const product = "T-Shirt",
      quantity = 5,
      unitcost = 300,
      img = "../t-shirt.jpeg";

    let cart = [
      { product: "T-Shirt", quantity: 5, unitcost: 300, img: "../t-shirt.jpeg" }
    ];

    expect(
      reducer(initialState, {
        type: type.UPDATE_CART,
        payload: { product, quantity, unitcost, img }
      })
    ).toEqual({
      ...initialState,
      cart: cart
    });
  });

  it("Should handle delete from cart action", () => {
    const product = "T-Shirt",
      quantity = 4,
      unitcost = 300,
      img = "/t-shirt";

    let cart = [];

    expect(
      reducer(initialState, {
        type: type.DELETE_FROM_CART,
        payload: { product, quantity, unitcost, img }
      })
    ).toEqual({
      ...initialState,
      cart: cart
    });
  });

  it("Should handle checkout to cart action", () => {
    let cart = [];

    expect(
      reducer(initialState, {
        type: type.CHECK_OUT,
        initialState
      })
    ).toEqual({
      ...initialState,
      cart: cart
    });
  });
});
