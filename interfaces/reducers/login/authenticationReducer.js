
import { loginConstants } from '../../constants/loginConstants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {

    return state;

}