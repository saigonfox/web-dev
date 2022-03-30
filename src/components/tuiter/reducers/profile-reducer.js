import profiles from "../data/profile.json"

const profileReducer = (state = profiles, action) => {
    switch (action.type) {
        case 'save-profile':
            return [action.profile]

        default:
            return state;                                          // return the single static state
    }
}

export default profileReducer;