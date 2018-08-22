
import loginConstants from '../../constants/loginConstants';
import cooker from '../../helpers/cooker';

let user = cooker.getCookie(loginConstants.LOGIN_KEY);

const initialState = _.isNull(user) ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {

    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                authObj: action.authObj
            };
        case loginConstants.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                authObj: action.authObj
            }
        default:
            return state;
    }
}