import { combineReducers } from 'redux';
import { authentication } from './login/authenticationReducer';
import { alert } from './login/alertReducer';
import { reducer as uiReducer } from 'redux-ui';
import { fundCard } from './fundCard/fundCardReducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    fundCard,
    ui: uiReducer
});

export default rootReducer;