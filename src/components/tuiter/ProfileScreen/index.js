import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import './profile.css';

const ProfileScreen = () => {
    const profiles = useSelector(
        state => state.profiles);
    return (
        <>
            <ul className="list-group">
                {
                    profiles.map && profiles.map(profile =>
                        <ProfileComponent key={profile._id}
                                      profile={profile}/>)
                }
            </ul>
        </>
    );
}

export default ProfileScreen;