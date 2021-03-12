import axios from "axios";

export const customerFetchAC = (score, solvedCards, user) => () => {
    axios.put(`${process.env.REACT_APP_URL}/user`, {
        score,
        solvedCards,
        user,
    })
        .then(res => res.data)
}