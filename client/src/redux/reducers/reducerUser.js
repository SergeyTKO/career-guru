import {INIT_TEST, RIGHT_ANSWERS, RESULT_COUNTER, REST_TO_FINISH, RESET_RESULTS, TEST_PROGRESS} from "../actionTypes";

const initialState = {
    result: {
        currentTest: [],
        rightAnswers: [],
        resultCounter: 0,
        numOfRestQuestions: 0,
        testProgress: 0
    }
};

export const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TEST:
            return {
                ...state,
                result: {...state.result, currentTest: action.payload, numOfRestQuestions: action.payload.length}
            }
        case RIGHT_ANSWERS:
            return {...state, result: {...state.result, rightAnswers: [...state.result.rightAnswers, action.payload]}};
        case RESULT_COUNTER:
            return {...state, result: {...state.result, resultCounter: state.result.resultCounter + 1}};
        case REST_TO_FINISH:
            return {...state, result: {...state.result, numOfRestQuestions: state.result.numOfRestQuestions - 1}};
        case RESET_RESULTS:
            return {...state, result: {...state.result, resultCounter: state.result.resultCounter = 0, numOfRestQuestions: state.result.numOfRestQuestions = 0, testProgress: state.result.testProgress = 0}};
        case TEST_PROGRESS:
            return {...state, result: {...state.result, testProgress: state.result.testProgress + 1,}};
            default:
            return state;
    }
}