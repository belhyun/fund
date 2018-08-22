import _m from 'moment';

const cooker = {
    setCookie: setCookie,
    getCookie: getCookie
};

function setCookie(name, value, expires) {
    let date = new Date();
    date.setTime(date.getTime() + expires);
    let expires2 = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires2 + "; path=/";
};

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0;i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};


export default cooker;