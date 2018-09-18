
import http from '../../helpers/http';
import moment from 'moment';

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
    },
    getFundCardForUI : getFundCardForUI

}

function getFundCardForUI() {

    const args = Array.prototype.slice.call(arguments, 0);

    const fundCard = __.first(args);

    // __.reduce(fundCard.donationDtos




}

export default fundCardServices;

