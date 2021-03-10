import axios from "axios";
import {addFavStateAC} from '../actionCreators'

export const addFavoritesAC = (id, user) => (dispatch) => {
  axios
    .post(process.env.REACT_APP_URL + "/addfavorites", { id: id, user: user })
    .then((res) => dispatch(addFavStateAC(res.data)));
};
