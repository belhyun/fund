import fundCardConstants from '../../constants/fundCardConstants';


const initialState = {
    fundCards: []
};

export function fundCard(state = initialState, action) {

    switch(action.type) {
        case fundCardConstants.GET_FUND_CARDS:
            return {
                fundCards: []
            }
        default:
            return state;
    }
}