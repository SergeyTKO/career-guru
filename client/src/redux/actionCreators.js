import {INIT_CARDS} from "./actionTypes";

export const initCardsAC = (cards) => ({
    type: INIT_CARDS,
    payload: cards,
});
