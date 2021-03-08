import axios from "axios";
import { addCardsAC } from "../actionCreators";
import { initCardsAC } from '../actionCreators';
import { deleteCardsAC } from '../actionCreators'




export const initCardsFetchAC = () => (dispatch) => {
  axios.get(process.env.REACT_APP_URL).then((res => {
    const cards = res.data;
    dispatch(initCardsAC(cards))
  }))
};

export const adminFetchAC = (question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags) => (dispatch) => {
  axios.post('http://localhost:4000/admin', {
    question: question.value,
    answer: [{
      answer: answerTrue.value,
      validity: true,
    }, {
      answer: answerFalse1.value,
      validity: false
    }, {
      answer: answerFalse2.value,
      validity: false
    }, {
      answer: answerFalse3.value,
      validity: false
    }
    ],
    count: count.value,
    theme: theme.value,
    tags: tags.value
  })
    .then(function (card) {
      dispatch(addCardsAC(card.data))
    })
}





export const deleteFetchAC = (id) => (dispatch) => {

  axios.delete('http://localhost:4000/admin', {
    data: {id: id}
  })
    .then(function (card) {
      dispatch(deleteCardsAC(card.data))
    })
}
