import axios from "axios";
import {userQuestionCardsAC} from "../actionCreators";

export const initUserCardsFetchAC = () => (dispatch) => {
    axios.get('http://localhost:4000/user').then((res => {
        const cards = res.data;
        dispatch(userQuestionCardsAC(cards))
    }))
};


export const userAddQuestionFetchAC = (question, answer, theme, company) => (dispatch) => {
    axios.post('http://localhost:4000/user', {
        question: question.value,
        answer: answer.value,
        theme: theme.value,
        company: company.value
    })
        .then(res => res.data)
}