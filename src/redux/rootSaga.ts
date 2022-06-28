import { all } from "@redux-saga/core/effects";

import auth from './auth/saga'
import movie from './movie/saga'

export default function* rootSaga() {
    yield all([
        ...auth,
        ...movie,
    ])
}