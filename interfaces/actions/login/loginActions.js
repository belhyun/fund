import loginConstants from '../../constants/loginConstants';
import loginServices from '../../services/loginService';
const loginActions = {
    login
};

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
        loginServices.login(authObj);
    };
}

export default loginActions;