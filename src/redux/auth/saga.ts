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
import { loginAPI } from "../../apis/auth";
import ResponseGenerator from "../../models/responseGenerator";


function* login(data: any) {
  const payload = data.payload
  try {
    const res:ResponseGenerator = yield call(loginAPI, payload)
    if(res.status == 200) {
      yield put(ACTION.loginSuccess(res.data))
    }

  } catch (error) {
    yield put(ACTION.loginFail(error));
  }
}

const saga = [takeLatest(TYPES.SIGN_IN, login)];

export default saga;
