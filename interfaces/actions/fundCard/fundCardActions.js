import fundCardServices from '../../services/fundCard/fundCardServices';
import fundCardConstants from '../../constants/fundCardConstants';
import util from '../../helpers/util';

const fundCardActions = {

    getFundCards: getFundCards

};


function getFundCards() {

    const fundCards = fundCardServices.getFundCards();

    return util.dispatcher({
        type: fundCardConstants.GET_FUND_CARDS, fundCards: fundCards
    });


}

export default fundCardActions;