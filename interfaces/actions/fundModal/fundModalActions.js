import util from '../../helpers/util';
import fundModalConstants from '../../constants/fundModalConstants';

const fundModalActions = {
    open: open,
    close: close
};

function open(state) {

    return util.dispatcher({
        type: fundModalConstants.OPEN,  fundModal: state
    })

}

function close() {

    return util.dispatcher({
        type: fundModalConstants.CLOSE, fundModal: {}
    })
}

export default fundModalActions;