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
        const omitFromUserInfo = _.partial(_.omit, authObj);
        const requestBody = Object.assign(authObj, omitFromUserInfo(userProfile, 'userProfile'));
        http.post("/login", {}, requestBody)
            .then(handleResponse)
            .then(resp => {
                return Promise.resolve(_.negate(_.isUndefined)(resp['respCode']) && _.isEqual(resp['respCode'], "LOGIN_SUCCESS") && resp);
            })
            .then(resp => {
                const authObj = resp['body'];
                if (_.negate(_s.isBlank)(authObj['accessToken'])) {
                    !localStorageHandler.getItem(LOGIN_KEY) && (function() {
                        localStorageHandler.setItem(LOGIN_KEY, {
                            authObj:omitFromUserInfo('kakaoId', 'nickname'),
                            userProfile: userProfile
                        }, authObj["expiresIn"]);
                        history.push("/");
                    })();
                }
                return authObj;
            });
    }
    return http.postToKakao("/v2/user/me", authObj['accessToken'])
        .then(userService.getUserProfile)
        .then(requestToFundServer);
}

function preLogin() {
    let fundObj = localStorageHandler.getItem(loginConstants.LOGIN_KEY) ? {
                loggingIn: true,
                authObj: localStorageHandler.getItem(loginConstants.LOGIN_KEY).authObj,
                userProfile: localStorageHandler.getItem(loginConstants.LOGIN_KEY).userProfile
            } : loginConstants.EMPTY_FUND_OBJ;
    history.push(fundObj.loggingIn? "/" : "/login");
    return {
        loggingIn: fundObj.loggingIn,
        authObj: fundObj.authObj
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

