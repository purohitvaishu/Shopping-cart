import * as actions from "./cartActions";

describe("Cart actions", () => {
  const product = "T-Shirt",
    quantity = 2,
    unitcost = 300,
    img = "/t-shirt";

  it("Should create an action to add to cart", () => {
    const expectedAction = {
      type: actions.ADD_TO_CART,
      payload: { product, quantity, unitcost, img }
    };

    expect(actions.addToCart(product, quantity, unitcost, img)).toEqual(
      expectedAction
    );
  });

  it("Should create an action to update to cart", () => {
    const expectedAction = {
      type: actions.UPDATE_CART,
      payload: { product, quantity, unitcost, img }
    };

    expect(actions.updateCart(product, quantity, unitcost, img)).toEqual(
      expectedAction
    );
  });

  it("Should create an action to delete to cart", () => {
    const expectedAction = {
      type: actions.DELETE_FROM_CART,
      payload: { product }
    };

    expect(actions.deleteFromCart(product)).toEqual(expectedAction);
  });

  it("Should create an action to checkout to cart", () => {
    const cart = {
      product: "T-Shirt",
      quantity: 2,
      unitcost: 300,
      img: "/t-shirt"
    };

    const expectedAction = {
      type: actions.CHECK_OUT,
      cart
    };

    expect(actions.checkOut(cart)).toEqual(expectedAction);
  });
});
