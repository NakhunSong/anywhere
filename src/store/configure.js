import { createStore } from 'redux';
import reducers from '../reducers';

export default function configure() {
  const enhancer = (window).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window).__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    reducers,
    enhancer,
  );
  return store;
}