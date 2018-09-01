
import localStorageHandler from '../../helpers/localStorageHandler';
import loginConstants from "../../constants/loginConstants";

const userService = {
    getUserProfileFromKakao: getUserProfileFromKakao,
    getUserProfileFromLocalStorage: getUserProfileFromLocalStorage
};

function getUserProfileFromKakao(resp) {

    let applyProperties = (function() {
        const properties = resp['properties'];
        return function(key) {
            return properties[key];
        }
    })();

    return resp && {
        kakaoId: resp['id'],
        nickname: applyProperties('nickname'),
        userProfile: {
            kakaoId: resp['id'],
            nickname: applyProperties('nickname'),
            profileImage: applyProperties('profile_image'),
            thumbnailImage: applyProperties('thumbnail_image')
        }
    };
}

function getUserProfileFromLocalStorage() {

    const storageObj = localStorageHandler.getItem(loginConstants.LOGIN_KEY);

    return storageObj ? storageObj.userProfile : {};

}

export default userService;
