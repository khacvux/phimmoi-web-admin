import { IAction } from "../../models/action";
import { addMovieModel, GetInfoMovieModel, GetMoviesByCategoryModel, infoMovieModel } from "../../models/movie";
import * as TYPES from "./constants"

export const addMovie = (payload: addMovieModel): IAction => {
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
        payload
    }
} 

export const getListMovieByCategory = (payload: GetMoviesByCategoryModel) => {
    return {
        type: TYPES.GET_LIST_MOVIE_BY_CATEGORY,
        payload
    }
}

export const getListMovieByCategorySuccess = (payload: Array<infoMovieModel>) => {
    return {
        type: TYPES.GET_LIST_MOVIE_BY_CATEGORY_SUCCESS,
        payload
    }
}


export const getListMovieByCategoryFailure = (payload: any) => {
    return {
        type: TYPES.GET_LIST_MOVIE_BY_CATEGORY_FAILURE,
        payload
    }
}

export const getInfoMovie = (payload: GetInfoMovieModel) => {
    return {
        type: TYPES.GET_INFO_MOVIE,
        payload
    }
}

export const getInfoMovieSuccess = (payload: infoMovieModel) => {
    return {
        type: TYPES.GET_INFO_MOVIE_SUCCESS,
        payload
    }
}

export const getInfoMovieFailure = (payload: any) => {
    return {
        type: TYPES.GET_INFO_MOVIE_FAILURE,
        payload
    }
}