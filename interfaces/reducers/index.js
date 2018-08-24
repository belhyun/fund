import { combineReducers } from 'redux';
import { authentication } from './login/authenticationReducer';
import { alert } from './login/alertReducer';
import { reducer as uiReducer } from 'redux-ui';

const rootReducer = combineReducers({
    authentication,
    alert,
    ui: uiReducer
});

export default rootReducer;