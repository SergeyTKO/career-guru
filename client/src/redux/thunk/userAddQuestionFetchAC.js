import axios from "axios";
import {userQuestionCardsAC} from "../actionCreators";

export const initUserCardsFetchAC = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_URL}/user`).then((res => {
        const cards = res.data;
        dispatch(userQuestionCardsAC(cards))
    }))
};


export const userAddQuestionFetchAC = (question, answer, theme, company) => () => {
    axios.post(`${process.env.REACT_APP_URL}/user`, {
        question: question.value,
        answer: answer.value,
        theme: theme.value,
        company: company.value
    })
        .then(res => res.data)
}