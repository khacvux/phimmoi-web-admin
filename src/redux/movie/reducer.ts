import { IAction } from "../../models/action";
import { infoMovieModel, movieModel } from "../../models/movie";
import * as TYPES from "./constants";

export interface InitialStateModel {
  listMovie: Array<movieModel>;
  info: infoMovieModel | undefined;
}

const initialState: InitialStateModel = {
  listMovie: [],
  info: undefined,
};

const reducers = (state: InitialStateModel = initialState, action: IAction) => {
  switch (action.type) {
    case TYPES.ADD_MOVIE:
      return state;
    case TYPES.ADD_MOVIE_SUCCESS:
      console.log(action.payload);
      return state;
    case TYPES.ADD_MOVIE_FAILURE:
      console.log(action.payload);
      return state;
    case TYPES.GET_LIST_MOVIE_BY_CATEGORY:
      return state;
    case TYPES.GET_LIST_MOVIE_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        listMovie: action.payload,
      };
    case TYPES.GET_LIST_MOVIE_BY_CATEGORY_FAILURE:
      console.log(action.payload);
      return state;
    case TYPES.GET_INFO_MOVIE:
      return state;
    case TYPES.GET_INFO_MOVIE_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };
    case TYPES.GET_INFO_MOVIE_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reducers;
