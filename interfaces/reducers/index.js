import { combineReducers } from 'redux';
import { registration } from './login/registrationReducer';
import { authentication } from './login/authenticationReducer';
import { login } from './login/loginReducer';
import { alert } from './login/alertReducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    login,
    alert
});

export default rootReducer;