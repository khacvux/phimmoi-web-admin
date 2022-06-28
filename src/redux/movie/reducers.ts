import { IAction } from "../../models/action";
import * as TYPES from "./constants"


const initialState = {

}

const reducers = (state = initialState, action: IAction) => {
    switch(action.type) {
        case TYPES.ADD_MOVIE:
            return state
        case TYPES.ADD_MOVIE_SUCCESS:
            return {
                ...state
            }

        case TYPES.ADD_MOVIE_FAILURE:
            console.log(action.payload)
            return {
                ...state
            }
        default: return state;
    }
}

export default reducers