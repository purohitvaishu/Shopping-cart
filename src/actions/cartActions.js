export const ADD_TO_CART = "ADD_TO_CART";
export const CHECK_OUT = "CHECK_OUT";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

export function addToCart(product, quantity, unitcost, img) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitcost, img }
  };
}

export function updateCart(product, quantity, unitcost, img) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitcost,
      img
    }
  };
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  };
}

export function checkOut(cart) {
  return {
    type: CHECK_OUT,
    cart
  };
}
