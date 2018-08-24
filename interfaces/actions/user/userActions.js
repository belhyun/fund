import userService from '../../services/user/userService';
import util from "../../helpers/util";

const userActions = {
    getUserProfile: getUserProfile

};

function getUserProfile(authObj) {
    userService.getUserProfile(authObj);
}
export default userActions;