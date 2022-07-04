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
import {
  addCategoryAPI,
  getListCategoryAPI,
  removeCategoryAPI,
} from "../../apis/categoryMovie";
import { IAction } from "../../models/action";

function* addCategory(data: IAction) {
  const { name, token } = data.payload;
  try {
    if (name) {
      const res: ResponseGenerator = yield call(addCategoryAPI, {
        token,
        name,
      });
      if (res.status == 200) {
        yield put(ACTION.getListCategory(token));
        yield put(ACTION.addCategorySuccess());
      }
    } else yield put(ACTION.addCategoryFail("NAME CANNOT EMPTY"));
  } catch (error) {
    yield put(ACTION.addCategoryFail(error));
  }
}

function* getListCategory(data: any) {
  try {
    const res: ResponseGenerator = yield call(getListCategoryAPI, data.payload);
    if (res.status == 200) {
      yield put(ACTION.getListCategorySuccess(res.data.data));
    }
  } catch (error) {
    yield put(ACTION.getListCategoryFail(error));
  }
}

function* removeCategory(data: any) {
  const { _id, token } = data.payload;
  try {
    const res: ResponseGenerator = yield call(removeCategoryAPI, {
      token,
      _id,
    });
    if (res.status == 200) {
      yield put(ACTION.removeCategorySuccess(_id));
    }
  } catch (error) {
    yield put(ACTION.removeCategoryFail(error));
  }
}

const saga = [
  takeEvery(TYPES.ADD_CATEGORY, addCategory),
  takeLatest(TYPES.GET_LIST_CATEGORY as any, getListCategory),
  takeEvery(TYPES.REMOVE_CATEGORY, removeCategory),
];

export default saga;
