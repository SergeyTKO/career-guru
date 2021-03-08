import {ADD_CARDS, DELETE_CARDS, INIT_CARDS} from "../actionTypes";

const initialState = {
    cards: []
};

export const reducerAdmin = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CARDS:
            return {...state, cards: action.payload}
        case ADD_CARDS:
            return { ...state, cards: [...state.cards, action.payload] };
        case DELETE_CARDS:
            return { ...state, cards: [...state.cards.filter((el) => el._id !== action.payload)] };
        default:
            return state;
    }
}
