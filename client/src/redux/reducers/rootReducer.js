import {combineReducers} from "redux";
import {reducerAdmin} from "./reducerAdmin";
import {reducerUser} from "./reducerUser";

const rootReducer = combineReducers({
    admin: reducerAdmin,
    user: reducerUser
});

export default rootReducer;

