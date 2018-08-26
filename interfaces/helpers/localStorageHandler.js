
let localStorageUndefinedChecker = function(func) {
    return function() {
        if (_.isUndefined(localStorage)) {
            return false;
        }
        return func.apply(null, arguments);
    }
};

const localStorageHandler = {
    setItem: localStorageUndefinedChecker(setItem),
    getItem: localStorageUndefinedChecker(getItem),
    removeItem: localStorageUndefinedChecker(removeItem)
};

function setItem(key, value, expires) {
    localStorage.setItem(key, JSON.stringify({
        value: value,
        timestamp: new Date().getTime() + expires * 1000
    }));
    return value;
};

function getItem(key) {
    let record = JSON.parse(localStorage.getItem(key));

    if (!record) {
        return false;
    }
    return (new Date().getTime() < record.timestamp && record.value);
};

function removeItem(key) {
    localStorage.removeItem(key);
}


export default localStorageHandler;