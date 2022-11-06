import React from "react";
import {useSelector} from "react-redux";
import ProfilesItem from "./profiles-item";


const ProfileComponent = () => {
    const profiles = useSelector(state => state.profiles)
    return (
        <>
            <h3>Profile</h3>
            <ProfilesItem/>

        </>
    );
};
export default ProfileComponent;