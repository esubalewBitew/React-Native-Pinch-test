import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './actions';
import fetchUsers$ from '../api/users';

function* fetchUsersSaga() {
    try {
        const response = yield call(fetchUsers$);
        yield delay(1000)
        yield put(fetchUsersSuccess(response?.data));
    } catch (error) {
        console.log('error', error)
        yield put(fetchUsersFailure(error.message));
    }
}

export function* watchFetchUsers() {
    // Watch for FETCH_USERS_REQUEST actions and trigger the fetchUsersSaga
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}
