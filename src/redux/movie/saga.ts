import * as TYPES from "./constants";
import * as ACTION from "./action";
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


function* addMovie (data: any) {
    const { name, idMovieDrive, description, image } = data.payload
    try {
        const videoInfo:ResponseGenerator = yield call(getVideoInfoAPI, idMovieDrive)
        console.log('get link done')
        const res:ResponseGenerator = yield call(addMovieAPI, {
            name,
            description,
            image,
            videoInfo
        })
        console.log(res)
    } catch (error) {
        yield put(ACTION.addMovieFail(error))
    }
}

const saga = [
    takeLatest(TYPES.ADD_MOVIE, addMovie)
];

export default saga;
