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
        const mergedAuthAndUserProfile = Object.assign(authObj, userProfile);
        const omitFromMergedAuthAndUserProfile = _.partial(_.omit, mergedAuthAndUserProfile);
        http.post("/login", {}, omitFromMergedAuthAndUserProfile("userProfile"))
            .then(handleResponse)
            .then(resp => {
                return Promise.resolve(_.negate(_.isUndefined)(resp['respCode']) && _.isEqual(resp['respCode'], "LOGIN_SUCCESS") && resp);
            })
            .then(resp => {
                const authObj = resp['body'];
                if (_.negate(_s.isBlank)(authObj['accessToken'])) {
                    !localStorageHandler.getItem(LOGIN_KEY) && (function() {
                        localStorageHandler.setItem(LOGIN_KEY, {
                            authObj: omitFromMergedAuthAndUserProfile("userProfile", "kakaoId", "nickname"),
                            userProfile: userProfile.userProfile
                        }, authObj["expiresIn"]);
                        history.push("/");
                    })();
                }
                return authObj;
            });
    }
    return http.postToKakao("/v2/user/me", authObj['accessToken'])
        .then(userService.getUserProfileFromKakao)
        .then(requestToFundServer);
}

function preLogin() {
    let authObj = localStorageHandler.getItem(loginConstants.LOGIN_KEY) ? {
                loggingIn: true,
                authObj: localStorageHandler.getItem(loginConstants.LOGIN_KEY).authObj
            } : loginConstants.EMPTY_FUND_OBJ;
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

