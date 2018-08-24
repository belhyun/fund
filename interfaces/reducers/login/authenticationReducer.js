import loginConstants from '../../constants/loginConstants';

let authObj = localStorage.getItem(loginConstants.LOGIN_KEY);

const initialState = _.isNull(authObj) ? { loggingIn: true, authObj: authObj } : {};

export function authentication(state = initialState, action) {

    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                authObj: action.authObj
            };

        case loginConstants.LOGIN_NEEDED:
            return {
                loggingIn: false,
                authObj: action.authObj
            };
        case loginConstants.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                authObj: action.authObj
            }
        case loginConstants.LOGOUT_SUCCESS:
            return {
                loggingIn: false,
                authObj: action.authObj
            }
        default:
            return state;
    }
}