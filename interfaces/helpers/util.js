import moment from "moment";

const util = {
    objectToQueryString: objectToQueryString,
    dispatcher: dispatcher,
    strToMomentObj: strToMomentObj
};

const objectToQueryString = function() {
    let args = Array.prototype.slice.call(arguments);
    let host = args[0], obj = args[1];
    const results = [];
    _.each(obj, (value, key) => {
        if (_.isArray(value)) {
            _.each(value, value => {
                results.push(`${key}=${value}`);
            });
            return;
        }
        results.push(`${key}=${value}`);
    });
    if(_.negate(_.isEmpty(results))) {
        host = host.concat("?");
    }
    return host.concat(results.join('&'));
};

function dispatcher(message) {
    return dispatch => {
        dispatch(message);
    }
};

function strToMomentObj(target) {
    return __.pipe(__.partial(__.val, target), moment, function(obj) {
        return obj.locale("ko");
    });
}

export default util;