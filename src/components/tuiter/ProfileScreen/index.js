import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import './profile.css';

const ProfileScreen = () => {
    const profiles = useSelector(
        state => state.profiles);
    return (
        <>
            <ProfileComponent profile = {profiles}/>
        </>
    );
}

export default ProfileScreen;