import { combineReducers } from 'redux';
import darkModeReducer from './darkMode/reducer';

const rootReducer = combineReducers({ darkMode: darkModeReducer });

export default rootReducer;
