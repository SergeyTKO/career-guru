import {INIT_CARDS, ADD_CARDS, DELETE_CARDS,AUTH_SUCSESSFULLY, LOGOUT, ERROR, INIT_TEST, RIGHT_ANSWERS, RESULT_COUNTER, REST_TO_FINISH} from "./actionTypes";

//ADMIN
export const initCardsAC = (cards) => ({
    type: INIT_CARDS,
    payload: cards,
});

export const addCardsAC = (card) => ({
    type: ADD_CARDS,
    payload: card,
});
export const deleteCardsAC = (card) => ({
    type: DELETE_CARDS,
    payload: card,
})
export const initTestAC = (data) => ({
    type: INIT_TEST,
    payload: data
})

export const answerAC = (data) => ({
    type: RIGHT_ANSWERS,
    payload: data
})

export const resultPlusOneAC = () => ({
    type: RESULT_COUNTER,
})

export const restToFinishAC = () => ({
    type: REST_TO_FINISH,
})

export const authSucsessAC = (payload) => ({ type: AUTH_SUCSESSFULLY, payload });

export const logoutAC = () => ({ type: LOGOUT });
export const errorAC = (payload) => ({ type: ERROR, payload });
