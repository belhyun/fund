import fundCardServices from '../../services/fundCard/fundCardServices';
import fundCardConstants from '../../constants/fundCardConstants';
import util from '../../helpers/util';

const fundCardActions = {

    getFundCards: getFundCards,
    getFundCard: getFundCard

};


function invokeFundCard() {

    const args = Array.prototype.slice.call(arguments, 0);

    return fundCardServices[args[0]].call(null, args[2]).then(resp => {
        return util.dispatcher(args[1](resp));
    });

}


function getFundCards() {


    return invokeFundCard('getFundCards', (resp) => {

        return {
            type: fundCardConstants.GET_FUND_CARDS, fundCards: resp
        }

    });

}

function getFundCard(fundCardId) {

    return invokeFundCard('getFundCard', (resp) => {
        return {
            type: fundCardConstants.GET_FUND_CARD, fundCard: resp
        }
    }, fundCardId)
}

export default fundCardActions;