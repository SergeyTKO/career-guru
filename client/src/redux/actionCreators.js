import {INIT_CARDS, ADD_CARDS, DELETE_CARDS} from "./actionTypes";

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