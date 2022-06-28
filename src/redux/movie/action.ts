import { IAction } from "../../models/action";
import { infoMovieModel } from "../../models/movie";
import * as TYPES from "./constants"

export const addMovie = (payload: infoMovieModel): IAction => {
    return {
        type: TYPES.ADD_MOVIE,
        payload
    }
} 

export const addMovieSuccess = (payload: any): IAction => {
    return {
        type: TYPES.ADD_MOVIE_SUCCESS,
        payload
    }
} 

export const addMovieFail = (payload: any): IAction => {
    return {
        type: TYPES.ADD_MOVIE_FAILURE,
        payload: null
    }
} 