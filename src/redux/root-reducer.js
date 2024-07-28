import { combineReducers } from "redux";

import favoriteReducer from "./favorite/slice";

const rootReducer = combineReducers({favoriteReducer});

export default rootReducer;