import loginConstants from '../../constants/loginConstants';
export function login(state = {}, action) {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                authObj: action.authObj
            };
        default:
            return state;
    }
};

