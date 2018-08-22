import { combineReducers } from 'redux';
import { registration } from './login/registrationReducer';
import { authentication } from './login/authenticationReducer';
import { alert } from './login/alertReducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    alert
});

export default rootReducer;