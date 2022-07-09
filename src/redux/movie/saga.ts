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
import ResponseGenerator from "../../models/responseGenerator";
import { addMovieAPI, getVideoInfoAPI } from "../../apis/movie";
import { addMovieSagaModel } from "../../models/movie";

function* addMovie(data: addMovieSagaModel) {
  const { name, description, category, poster, movieFile } = data.payload;
  try {
    const res: ResponseGenerator = yield call(addMovieAPI, {
      name,
      description,
      poster,
      category,
      movieFile,
    });
    console.log(res);
  } catch (error) {
    yield put(ACTION.addMovieFail(error));
  }
}

const saga = [takeLatest(TYPES.ADD_MOVIE, addMovie)];

export default saga;
