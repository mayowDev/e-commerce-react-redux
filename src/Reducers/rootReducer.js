// this is were we combine all reducers in one file
import { combineReducers } from "redux";

import Reducer from "./Reducer";
// import cartReducer from './cartReducer'

export default combineReducers({
  reducer: Reducer
});
