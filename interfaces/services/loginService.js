import util from "../helpers/util";
import appConstants from "../constants/appConstants";
import loginConstants from "../constants/loginConstants";
import functional from '../helpers/functional';
import cooker from '../helpers/cooker';

const loginService = {
    login
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
                _.compose(function(go){
                    if (go) {
                        cooker.setCookie(loginConstants.LOGIN_KEY, authObj, authObj['expiresIn']);
                    }
                    return go;
                }, _.isNull, cooker.getCookie)(loginConstants.LOGIN_KEY)
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

export default loginService;

