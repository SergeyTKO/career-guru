import axios from "axios";

export const customerFetchAC = (score, solvedCards, user) => (dispatch) => {
    axios.put('http://localhost:4000/user', {
        score,
        solvedCards,
        user,
    })
        .then(res => res.data)
}