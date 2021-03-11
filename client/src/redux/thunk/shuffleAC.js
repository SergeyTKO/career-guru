import {shuffleAC} from "../actionCreators";

export const shuffleFunctionAC = (answer) => (dispatch) => {
    for (let i = answer.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answer[j];
        answer[j] = answer[i];
        answer[i] = temp;
    }
    dispatch(shuffleAC(answer));
}