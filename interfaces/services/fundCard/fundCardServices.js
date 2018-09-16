
import http from '../../helpers/http';

const log = console.log;

const extractBody = function(url) {
    return  http.get(url)
        .then(http.handleResponse)
        .then(function(resp) {
            return http.checkResponse(resp, "SUCCESS");
        })
        .then(__.v('body'))
        .catch(log);

};

const fundCardServices = {
    getFundCards: function(){
        return extractBody("/card-list");
    },
    getFundCard: function(id) {
        return extractBody("/card-detail/" + id);
    }

}

export default fundCardServices;

