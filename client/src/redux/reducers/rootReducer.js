import {combineReducers} from "redux";
import {adminReducer} from "./adminReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    admin: adminReducer,
    user: userReducer,
    auth:authReducer
});

export default rootReducer;

