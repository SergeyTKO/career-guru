import axios from "axios";
import {addFavStateAC} from '../actionCreators'

export const addFavoritesAC = (dispatch) => {
axios.post(process.env.REACT_APP_URL+'addfavorites', {
  
})
}

// export const updateFavoriteFetchAC = (id, user) => (dispatch) => {
//   // axios.put('http://localhost:4000/addfavorites', {
//   //   id, user
//   // })
//   //     .then(res => res.data)
// }