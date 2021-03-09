import axios from "axios";
import {customerAC} from "../actionCreators";

export const customerFetchAC = (count, rightAnswers, user) => (dispatch) => {
    axios.post('http://localhost:4000/user', {
        count,
        rightAnswers,
        user: user.id,
    })
        .then(function (score, solvedCards) {
            dispatch(customerAC(score, solvedCards))
        })
}