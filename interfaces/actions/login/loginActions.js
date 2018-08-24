import loginConstants from '../../constants/loginConstants';
import loginServices from '../../services/loginService';
import util from "../../helpers/util";

const loginActions = {
    login,
    logout,
    preLogin
};

function preLogin(authObj) {
    let res = loginServices.preLogin();
    if (res.loggingIn) {
        let authObj = _.pick(res, 'authObj');
        return util.dispatcher({
            type: loginConstants.LOGIN_SUCCESS, authObj
        });
    }
    return util.dispatcher({
        type: loginConstants.LOGIN_NEEDED, authObj
    });
}

function logout() {
    loginServices.logout();
    return util.dispatcher({
        type: loginConstants.LOGOUT_SUCCESS
    })
}

function login(authObj) {

    let request = function(authObj) {
        return {
            type: loginConstants.LOGIN_REQUEST, authObj
        }
    };
    let success = function(authObj) {
        return {
            type: loginConstants.LOGIN_SUCCESS, authObj: authObj
        }
    };
    return dispatch => {
        dispatch(request({
            authObj
        }));
        loginServices.login(authObj)
            .then(
                authObj => {
                    dispatch(success(authObj));
                },
                error => {

                }
        )
    };
}

export default loginActions;