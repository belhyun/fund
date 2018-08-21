import util from "../helpers/util";
import appConstants from "../constants/appConstants";

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
        .then(fundUser => {
            log(1);
            if (!s_.isBlank(fundUser.accessToken)) {
                //do anything
            }
            log(fundUser);
            return fundUser;
        });
    // return authObj;

}

function handleResponse(resp) {

    return resp;

}

export default loginService;

