import { createStore } from 'redux';
import reducers from './reducers'
import actions from './actions';

export const store = createStore(reducers);