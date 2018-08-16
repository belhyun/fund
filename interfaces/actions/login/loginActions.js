import loginConstants from '../../constants/loginConstants';
const loginActions = {
    login,
};

function login(authObj) {
    return {
        type: loginConstants.LOGIN_REQUEST, authObj
    };
}

export default loginActions;