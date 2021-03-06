import http from '../../helpers/http';
import fundCardConstants from '../../constants/fundCardConstants';

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
    getFundCardForUI : getFundCardForUI,
    addComment: addComment

}

function addComment() {
    const args = Array.prototype.slice.call(arguments, 0);

    return http.post("/add/comment", undefined, {
            fundCardId: args[0],
            fundUserId: args[1],
            contents: args[2]
        })
        .then(http.handleResponse)
        .then(function(resp) {
            return http.checkResponse(resp, "SUCCESS");
        })
        .then(__.v('body'))
        .catch(log);

}

function getFundCardForUI() {


    const args = Array.prototype.slice.call(arguments, 0);

    const fundCard = __.first(args);

    if (_.isUndefined(fundCard)) {
        return fundCardConstants.DEFAULT_DETAIL_CONTENTS;
    };

    return fundCard;
}

export default fundCardServices;

