import loginConstants from '../../constants/loginConstants';
import loginServices from '../../services/loginService';
import cooker from "../../helpers/cooker";
const loginActions = {
    login,
    logout,
    preLogin
};

function preLogin(authObj) {
    let res = loginServices.preLogin();
    if (res.loggingIn) {
        let authObj = res['authObj'];
        return dispatch => {
            dispatch({
                type: loginConstants.LOGIN_SUCCESS, authObj
            });
        }
    }
    return dispatch => {
        dispatch({
            type: loginConstants.LOGIN_NEEDED, authObj
        })
    }
}

function logout() {
    loginServices.logout();
    return dispatch => {
        dispatch({
            type: loginConstants.LOGOUT_SUCCESS
        })
    }
}

function login(authObj) {

    let request = function(authObj) {
        return {
            type: loginConstants.LOGIN_REQUEST, authObj
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

    function success(authObj) {
        return {
            type: loginConstants.LOGIN_SUCCESS, authObj: authObj
        }
    }

}

export default loginActions;