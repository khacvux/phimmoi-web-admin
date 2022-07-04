import { combineReducers } from "redux";

import auth from './auth/reducer'
import movie from './movie/reducer'
import category from './categoryMovie/reducer'

export default combineReducers({
    auth,
    movie,
    category
})