import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const isProduction = process.env.NODE_ENV === 'production';
const enhancer = isProduction
  ? compose(applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default function configure(initialState) {
  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
