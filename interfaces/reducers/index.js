import { combineReducers } from 'redux';
import { authentication } from './login/authenticationReducer';
import { alert } from './login/alertReducer';

const rootReducer = combineReducers({
    authentication,
    alert
});

export default rootReducer;