import {INIT_TEST, RIGHT_ANSWERS, RESULT_COUNTER} from "../actionTypes";

const initialState = {
    result: [{
        rightAnswers: [{}],
        resultCounter: null,
        numOfRestQuestions: null,
    }]
};

export const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TEST:
            return {...state, cards: action.payload}
        case RIGHT_ANSWERS:
            return { ...state, cards: [...state.cards, action.payload] };
        case RESULT_COUNTER:
            return { ...state, cards: [...state.cards.filter((el) => el._id !== action.payload)] };
        default:
            return state;
    }
}