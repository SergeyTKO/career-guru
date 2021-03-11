import {AUTH_SUCSESSFULLY, LOGOUT, ERROR, UPDATE_USERDATA, RESET_USERDATA} from "../actionTypes";

const windowState = JSON.parse(window.localStorage.getItem("state"));
let preloadedState = {};
if (windowState) {
    preloadedState = {
        isAuth: windowState.auth.isAuth,
        user: windowState.auth.user,
    };
} else {
    preloadedState = {
        isAuth: false,
        user: {email: "", firstName: "", solvedCards: []},
        error: null
    };
}

export const authReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case AUTH_SUCSESSFULLY:
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                error: null
            };
        case LOGOUT:
            window.localStorage.removeItem("jwt");
            return {
                ...state,
                isAuth: false,
                user: {email: " ", username: " "},
            };
        case UPDATE_USERDATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    score: state.user.score + action.payload.count,
                    solvedCards: [...state.user.solvedCards, ...action.payload.rightAnswers]
                }
            };
        case RESET_USERDATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    score: state.user.score,
                    solvedCards: []
                }
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
