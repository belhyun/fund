import axios from 'axios';
import appConstants from '../constants/appConstants';

const http = {
    postToKakao: postToKakao,
    post: post,
    get: get
};

const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
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
    return axios.create({
        headers: headers
    }).get(baseUrl, body);
}

export default http;