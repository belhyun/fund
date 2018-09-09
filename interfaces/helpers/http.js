import axios from 'axios';
import appConstants from '../constants/appConstants';

const http = {
    postToKakao: postToKakao,
    post: post,
    get: get,
    checkResponse: checkResponse,
    handleResponse: handleResponse
};

const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
}

function request(func, baseUrl, headers, body) {

    let localHeaders = {};
    Object.assign(localHeaders, commonHeaders);
    Object.assign(localHeaders, headers);

    return axios
        .create({
            headers: localHeaders
        })[func].call(null, appConstants.API_SERVER[process.env.NODE_ENV].concat(baseUrl), body);

}

function post(baseUrl, headers, body) {
    let localHeaders = {};
    Object.assign(localHeaders, commonHeaders);
    Object.assign(localHeaders, headers);

    return axios
         .create({
             headers: localHeaders
         })
         .post(appConstants.API_SERVER[process.env.NODE_ENV].concat(baseUrl), body);
}

function postToKakao(baseUrl, accToken) {
    Kakao.Auth.setAccessToken(accToken, false);
    return new Promise(function(resolve, reject) {
        Kakao.API.request({
            url: baseUrl,
            success: function(resp) {
                resolve(resp);
            },
            fail: function(error) {
                reject(error);
            }
        });
    });
}

function get(baseUrl, headers, body) {

    return request(
        'get',
        baseUrl,
        _.isUndefined(headers) ? {} : headers,
        _.isUndefined(body) ? {} : body);
}

function checkResponse(resp, code) {

    const go = __.go(
        resp['respCode'],
        __.all(
            __.negate(_.isUndefined),
            __.partial(__.isEqual(code))
        ),
        function() {

            console.log(Array.prototype.slice.call(arguments));
            
        },
        Array.prototype.slice,
        __.every);


   return new Promise(function(resolve, reject) {
       go ? resolve(resp): reject("response code not match");
   });

    // Promise.resolve(_.negate(_.isUndefined)(resp['respCode']) && _.isEqual(resp['respCode'], code) && resp);
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


export default http;