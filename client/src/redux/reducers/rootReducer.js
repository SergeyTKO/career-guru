import {combineReducers} from "redux";
import {reducerAdmin} from "./reducerAdmin";
import {reducerUser} from "./reducerUser";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    admin: reducerAdmin,
    user: reducerUser,
    auth:authReducer
});

export default rootReducer;

