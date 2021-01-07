import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
  CHECK_OUT
} from "../actions/cartActions";

import initialState from "../db/cart";

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let cart = [...state.cart, action.payload];

      return {
        ...state,
        cart: cart
      };
    }

    case UPDATE_CART: {
      let cart = state.cart.map(item =>
        item.product === action.payload.product ? action.payload : item
      );

      return {
        ...state,
        cart: cart
      };
    }

    case DELETE_FROM_CART: {
      let cart = state.cart.filter(
        item => item.product !== action.payload.product
      );

      return {
        ...state,
        cart: cart
      };
    }

    case CHECK_OUT: {
      let cart = [];

      return { ...state, cart: cart };
    }

    default:
      return state;
  }
}
