const userService = {
    getUserProfile: getUserProfile
};

function getUserProfile(resp) {

    let applyProperties = (function() {
        const properties = resp['properties'];
        return function(key) {
            return properties[key];
        }
    })();

    return resp && {
        kakaoId: resp['id'],
        nickname: applyProperties('nickname'),
        userImage: {
            profileImage: applyProperties('profile_image'),
            thumbnailImage: applyProperties('thumbnail_image')
        }
    };
}

export default userService;
