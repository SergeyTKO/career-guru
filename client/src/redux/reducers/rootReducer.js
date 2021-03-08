import {combineReducers} from "redux";
import {reducerUser} from "./reducerUser";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    user: reducerUser,
    auth:authReducer
});

export default rootReducer;

