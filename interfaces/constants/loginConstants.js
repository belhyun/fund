const loginConstants = {
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_NEEDED: 'USERS_LOGIN_NEEDED',
    LOGOUT_SUCCESS: 'USERS_LOGOUT_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGIN_KEY: "FUND_ACCESS_TOKEN",
    EMPTY_FUND_OBJ: {
        loggingIn: false, authObj:{}, userProfile:{}
    }
};

export default loginConstants;
