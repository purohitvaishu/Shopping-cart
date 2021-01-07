import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  cartReducer,
  loginReducer
});

export default rootReducer;
