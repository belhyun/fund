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
            let accToken = resp.body['accessToken'];
            if (_.negate(_s.isBlank)(accToken)) {
                _.compose(function(go){
                    if (go) {
                        cooker.setCookie(loginConstants.COOKIE_KEY, resp.body, resp.body['expiresIn']);
                    }
                    return go;
                }, _.isNull, cooker.getCookie)(loginConstants.COOKIE_KEY)
            }
            return accToken;
        });
    // return authObj;

}

function handleResponse(resp) {
    return resp.json();
}

export default loginService;

