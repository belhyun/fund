import loginConstants from "../../constants/loginConstants";
import {history} from '../../helpers/history';
import localStorageHandler from "../../helpers/localStorageHandler";
import http from '../../helpers/http';


const loginService = {
    login,
    logout,
    preLogin
};

let log = console.log;


function logout() {
   localStorageHandler.removeItem(loginConstants.LOGIN_KEY);
   history.push("/login");
}

function login(authObj) {
    const LOGIN_KEY = loginConstants.LOGIN_KEY;
    let requestToFundServer = userProfile => {
        const requestBody = Object.assign(authObj, userProfile);
        http.post("/login", {}, requestBody)
            .then(handleResponse)
            .then(resp => {
                return Promise.resolve(_.negate(_.isUndefined)(resp['respCode']) && _.isEqual(resp['respCode'], "LOGIN_SUCCESS") && resp);
            })
            .then(resp => {
                const authObj = resp['body'];
                if (_.negate(_s.isBlank)(authObj['accessToken'])) {
                    !localStorageHandler.getItem(LOGIN_KEY) && (function() {
                        localStorageHandler.setItem(LOGIN_KEY, requestBody, authObj["expiresIn"]);
                        history.push("/");
                    })();
                }
                return requestBody;
            });
    }
    return http.postToKakao("/v2/user/me", authObj['accessToken'])
        .then(getProfile)
        .then(requestToFundServer);
}

function preLogin() {
    let authObj = localStorageHandler.getItem(loginConstants.LOGIN_KEY) ? {
                loggingIn: true,
                authObj: localStorageHandler.getItem(loginConstants.LOGIN_KEY)
            } : loginConstants.EMPTY_AUTH_OBJ;
    history.push(authObj.loggingIn? "/" : "/login");
    return {
        loggingIn: authObj.loggingIn,
        authObj: authObj.authObj
    }
}

function handleResponse(response) {
    if (!response) {
        if (response.status === 401) {
            location.reload(true);
        }
        const error = response.statusText;
        return Promise.reject(error);
    }
    return response.data;
}

function getProfile(resp) {

    let applyProperties = function() {
        const properties = resp['properties'];
        return function(key) {
            return properties[key];
        }
    };

    return resp && {
        id: resp['id'],
        nickname: applyProperties()('nickname'),
    };

}

export default loginService;

