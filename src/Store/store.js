import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './reducers';
import { watchFetchUsers } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    usersReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchUsers);

export default store;
