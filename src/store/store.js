import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReduser from "./redusers/reducer";

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
