import loginConstants from "../../constants/loginConstants";
import {history} from '../../helpers/history';
import localStorageHandler from "../../helpers/localStorageHandler";
import http from '../../helpers/http';
import userService from '../user/userService';


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
        const userInfo = Object.assign(authObj, userProfile);
        http.post("/login", {}, _.omit(userInfo, 'userImage'))
            .then(handleResponse)
            .then(resp => {
                return Promise.resolve(_.negate(_.isUndefined)(resp['respCode']) && _.isEqual(resp['respCode'], "LOGIN_SUCCESS") && resp);
            })
            .then(resp => {
                const authObj = resp['body'];
                if (_.negate(_s.isBlank)(authObj['accessToken'])) {
                    !localStorageHandler.getItem(LOGIN_KEY) && (function() {
                        localStorageHandler.setItem(LOGIN_KEY, userInfo, authObj["expiresIn"]);
                        history.push("/");
                    })();
                }
                return userInfo;
            });
    }
    return http.postToKakao("/v2/user/me", authObj['accessToken'])
        .then(userService.getUserProfile)
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

export default loginService;

