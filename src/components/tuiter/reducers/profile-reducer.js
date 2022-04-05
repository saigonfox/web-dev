const profileData = {
    "_id": "001",
    "firstName": "Viet",
    "lastName": "Nguyen",
    "handle": "nguyen.vi",
    "profilePicture": "../../../images/husky.png",
    "bannerPicture": "../../../images/banner.png",
    "bio": "Student, Data Scientist, Economics, and hopeless romantic.",
    "website": "https://www.youtube.com/channel/UCGspBffXIOT3lQszXFPl4ow",
    "location": "Boston, MA",
    "dateOfBirth": "11/17/2001",
    "dateJoined": "10/2017",
    "followingCount": "1230",
    "followersCount": "77",
    "tuitsCount": "123"
}


const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'save-profile':
            return action.profile

        default:
            return state;
    }
}

export default profileReducer;