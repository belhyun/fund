import userService from '../../services/user/userService';
import util from "../../helpers/util";
import userConstants from "../../constants/userConstants";

export function updateProfileImage(prevState) {

    const userProfile = userService.getUserProfileFromLocalStorage();

    if (_.negate(_.isEmpty)(userProfile)) {
        return util.dispatcher({
            type: userConstants.UPDATE_PROFILE_IMAGE, userProfile
        })
    }

}
