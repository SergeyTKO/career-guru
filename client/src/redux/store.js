import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

 store.subscribe(() => {
   const state = store.getState();
   window.localStorage.setItem('state', JSON.stringify(state));
 });

export default store;