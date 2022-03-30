import React from "react";
import EditProfileComponent from "./EditProfileComponent";
import profiles from "../data/profile.json"
import './profile.css';

const EditProfileScreen = () => {
    return(
        <>
            <ul className="list-group">
                {
                    profiles.map && profiles.map(profile =>
                        <EditProfileComponent key={profile._id}
                                          profile={profile}/>)
                }
            </ul>
        </>
    )
}

export default EditProfileScreen;