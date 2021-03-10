import {INIT_TEST, RIGHT_ANSWERS, RESULT_COUNTER, REST_TO_FINISH, RESET_RESULTS, TEST_PROGRESS} from "../actionTypes";

const windowState = JSON.parse(window.localStorage.getItem('state'));
let initialState = {};
if (windowState && windowState.user) {
    initialState = {
        result: windowState.user.result,
    };
} else {
    initialState = {
        result: {
            currentTest: [],
            rightAnswers: [],
            resultCounter: 0,
            numOfRestQuestions: 0,
            testProgress: 0,
            count: 0
        }
    };
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TEST:
            return {
                ...state,
                result: {...state.result, currentTest: action.payload, numOfRestQuestions: action.payload.length}
            }
        case RIGHT_ANSWERS:
            return {...state,
                result: {
                    ...state.result,
                    rightAnswers: [...state.result.rightAnswers, action.payload],
                    count: state.result.count + action.payload.count
                }
            };
        case RESULT_COUNTER:
            return {...state, result: {...state.result, resultCounter: state.result.resultCounter + 1}};
        case REST_TO_FINISH:
            return {...state, result: {...state.result, numOfRestQuestions: state.result.numOfRestQuestions - 1}};
        case RESET_RESULTS:
            return {...state,
                result: {
                    ...state.result,
                    rightAnswers: state.result.rightAnswers = [],
                    resultCounter: state.result.resultCounter = 0,
                    numOfRestQuestions: state.result.numOfRestQuestions = 0,
                    testProgress: state.result.testProgress = 0,
                    count: state.result.count = 0
                }
            };
        case TEST_PROGRESS:
            return {...state, result: {...state.result, testProgress: state.result.testProgress + 1}};
        
      
        default:
        return state;
    }
}