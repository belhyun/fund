import util from "../helpers/util";
import appConstants from "../constants/appConstants";
import loginConstants from "../constants/loginConstants";
import { history } from '../helpers/history';


const loginService = {
    login,
    preLogin
};

let log = console.log;

function login() {
    let args = Array.prototype.slice.call(arguments);
    let authObj = _.first(args);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(authObj)
    };

    return fetch(
        appConstants.API_SERVER[process.env.NODE_ENV].concat("/login"), requestOptions)
        .then(handleResponse)
        .then(resp => {
            let authObj = resp['body'];
            if (_.negate(_s.isBlank)(authObj['accessToken'])) {
                log(localStorage.getItem(loginConstants.LOGIN_KEY));
                if (_.isNull(localStorage.getItem(loginConstants.LOGIN_KEY))) {
                    localStorage.setItem(loginConstants.LOGIN_KEY, JSON.stringify(authObj));
                    history.push("/");
                }
            }
            return authObj;
        });
    // return authObj;

}

function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                location.reload(true);
            }
            const error = response.statusText;
            return Promise.reject(error);
        }
        if( _.negate(_.isUndefined)(data['respCode']) && _.isEqual(data['respCode'], "LOGIN_SUCCESS")) {
            return data;
        }
    });

}

function preLogin() {
    let authObj = _.isNull(localStorage.getItem(loginConstants.LOGIN_KEY)) ?
            loginConstants.EMPTY_AUTH_OBJ : {
                loggingIn: true,
                authObj: JSON.parse(localStorage.getItem(loginConstants.LOGIN_KEY))
            };
    //토큰 만료시 로그인 처리 필요
    // if (authObj.loggingIn) {
    //     let expiredIn = moment().add(authObj['expiresIn'], "seconds");
    // }
    if (authObj.loggingIn) {
        history.push("/");
    }
    return {
        loggingIn: authObj.loggingIn,
        authObj: authObj.authObj
    }
}

export default loginService;

