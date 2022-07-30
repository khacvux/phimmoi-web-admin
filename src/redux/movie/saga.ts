import * as TYPES from "./constants";
import * as ACTION from "./actions";
import {
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  takeLeading,
} from "redux-saga/effects";
import ResponseGenerator, {
  ResponseModel,
} from "../../models/responseGenerator";
import * as MovieAPI from "../../apis/movie";
import {
  addMovieSagaModel,
  GetInfoMovieModel,
  GetMoviesByCategoryModel,
} from "../../models/movie";
import FormData from 'form-data'

function* addMovie(data: addMovieSagaModel) {
  const { name, description, category, poster, movieFile, token } = data.payload;
  let formdata = new FormData()
  formdata.append('name', name)
  formdata.append('description', description)
  formdata.append('poster', poster)
  formdata.append('category', category)
  formdata.append('movieFile', movieFile)
  try {
    const res: ResponseGenerator = yield call(MovieAPI.addMovieAPI, {
      formdata,
      token
    });

    // const data: ResponseModel = res.data
    // if(data.successful){
    //   yield put(ACTION.addMovieSuccess(data.message))
    // } else {
    //   yield put(ACTION.addMovieFail(data.message))
    // }
    // console.log(res);
  } catch (error) {
    yield put(ACTION.addMovieFail(error));
  }
}

function* getMoiesByCategory(action: any) {
  try {
    const payload: GetMoviesByCategoryModel = action.payload;
    const response: ResponseGenerator = yield call(
      MovieAPI.listMovieByCategory,
      payload
    );

    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(ACTION.getListMovieByCategorySuccess(data.data));
    } else yield put(ACTION.getListMovieByCategoryFailure(data));
  } catch (error) {
    yield put(ACTION.getListMovieByCategoryFailure(error));
  }
}

function* getInfo(action: any) {
  try {
    const payload: GetInfoMovieModel = action.payload;
    const response: ResponseGenerator = yield call(
      MovieAPI.getInfoMovie,
      payload
    );
    const data: ResponseModel = response.data;
    console.log(data);
    if (data.successful) {
      console.log("get info success");
      yield put(ACTION.getInfoMovieSuccess(data.data));
    } else {
      console.log("get info failue");
      yield put(ACTION.getInfoMovieFailure(data));
    }
  } catch (error) {
    yield put(ACTION.getInfoMovieFailure(error));
  }
}

const saga = [
  takeLatest(TYPES.ADD_MOVIE, addMovie),
  takeLatest(TYPES.GET_LIST_MOVIE_BY_CATEGORY, getMoiesByCategory),
  takeLatest(TYPES.GET_INFO_MOVIE, getInfo),
];

export default saga;
