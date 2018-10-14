import loginConstants from '../../constants/loginConstants';
import loginServices from '../../services/login/loginService';
import util from "../../helpers/util";

const loginActions = {
    login,
    logout,
    preLogin
};

function preLogin() {
    const res = loginServices.preLogin();
    if (res.loggingIn) {
        let authObj = res['authObj'];
        return util.dispatcher({
            type: loginConstants.LOGIN_SUCCESS, authObj
        });
    }
    return util.dispatcher({
        type: loginConstants.LOGIN_NEEDED
    });
}

function logout() {
    loginServices.logout();
    return util.dispatcher({
        type: loginConstants.LOGOUT_SUCCESS
    })
}

function login(authObj) {

    const request = function(authObj) {
        return {
            type: loginConstants.LOGIN_REQUEST, authObj
        }
    };
    const success = function(authObj) {
        return {
            type: loginConstants.LOGIN_SUCCESS, authObj: authObj
        }
    };
    /**
     * 에러처리 필요함
     */
    return dispatch => {
        dispatch(request({
            authObj
        }));
        loginServices.login(authObj)
            .then(
                userInfo => {
                    dispatch(success(authObj));
                    return userInfo;
                }
            )
            .catch(error => {
                console.log(error);
            });
    };
}

export default loginActions;