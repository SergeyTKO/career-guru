import {INIT_CARDS} from "../actionTypes";

const initialState = {
    user: []
}

export const reducerUser = (state = initialState, action) => {
    switch (action.payload) {
        case INIT_CARDS:
            return {...state, user: action.payload}
    }
}