const count = cartItems => {
  let val = 0;
  cartItems.map(cnt => (val = val + cnt.unitcost * cnt.quantity));
  return val;
};
export default count;
