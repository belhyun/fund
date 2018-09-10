
import http from '../../helpers/http';

const log = console.log;

const fundCardServices = {
    getFundCards: getFundCards
}

function getFundCards() {

    return  http.get("/card-list")
        .then(http.handleResponse)
        //.then(__.partial(http.checkResponse, _, "SUCCESS"))
        .then(function(resp) {
            return http.checkResponse(resp, "SUCCESS");
        })
        .then(__.v('body'))
        .catch(log);


}

export default fundCardServices;

