import {combineReducers} from "redux";
import {reducerAdmin} from "./reducerAdmin";

const rootReducer = combineReducers({
    admin: reducerAdmin
});

export default rootReducer;

