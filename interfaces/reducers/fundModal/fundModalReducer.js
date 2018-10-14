import fundModalConstants from '../../constants/fundModalConstants';


const initialState = {
    modal: false,
    title: "",
    contents: "",
    okCallback: function() {}
};

export function fundModal(state = initialState, action) {

    switch(action.type) {
        case fundModalConstants.OPEN:
            return {
                fundModal: action.fundModal
            }
        case fundModalConstants.CLOSE:
            return {
                fundModal: action.fundModal
            }
        case fundModalConstants.OK:
            return {
                fundModal: action.fundModal
            }
        default:
            return state;
    }
}