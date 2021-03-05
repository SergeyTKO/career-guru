import axios from "axios";
import {initCardsAC} from '../actionCreators';

export const initCardsFetchAC = () => (dispatch) => {
    axios.get(process.env.REACT_APP_URL).then((res => {
        const cards = res.data;
        dispatch(initCardsAC(cards))
    }))

};