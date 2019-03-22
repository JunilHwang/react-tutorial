import modules from './modules';
import { createStore } from 'redux';

export default createStore(
  modules, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);