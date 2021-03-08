import {INIT_CARDS, AUTH_SUCSESSFULLY, LOGOUT} from "./actionTypes";

export const initCardsAC = (cards) => ({
    type: INIT_CARDS,
    payload: cards,
});

export const authSucsessAC = (user) => ({ type: AUTH_SUCSESSFULLY, payload: user });

export const logoutAC = () => ({ type: LOGOUT });