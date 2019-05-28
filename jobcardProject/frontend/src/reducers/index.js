import { combineReducers } from 'redux';
import cardslist from './cardslist';
import errors from './errors';
import messages from './messages';
import auth from "./auth";


export default combineReducers({
    cardslist,
    errors,
    messages,
    auth
});