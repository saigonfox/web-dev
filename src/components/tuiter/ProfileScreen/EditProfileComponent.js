import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const EditProfileComponent = () => {
    const data = useSelector((state) => state.profiles);

    let [profile, setProfile] = useState(
        data[0]
    );

    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch({type: 'save-profile', profile: profile
        });
    }

    return(
        <>
            <div className="mt-2">
                <div className="row col-12 mb-1">
                    <div className="col-1 mt-2">
                        <Link to="/tuiter/profile"
                              className="text-decoration-none">
                            <i className="fa-solid fa-xmark fa-xl text-white-50"></i>

                        </Link>
                    </div>
                    <div className="col-8 ps-0 ms-4">
                        <h5 className="mt-1 fw-bold font-">Edit profile</h5>
                    </div>
                    <div className="col-2 ps-0 ms-4 ">
                        <Link to="/tuiter/profile"
                              className="text-decoration-none">
                            <button className="btn float-end fw-bold text-black bg-white
                                    wd-personal-save-profile-button"
                                    onClick={saveProfile}>Save
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row pe-0 col-12 pt-2 container position-relative">
                    <img className="pe-0 wd-personal-banner d-block" src={profile.bannerPicture} alt="banner"/>
                    <i className="fa-solid fa-camera fa-1x wd-personal-banner-edit-icon"></i>
                    <i className="fa-solid fa-xmark fa-xl wd-personal-banner-remove-icon"></i>
                </div>

                <div className="row ms-2 col-12 container position-relative">
                    <img className="wd-personal-avatar d-block"
                         src={profile.profilePicture} alt="profile"/>
                    <i className="fa-solid fa-camera fa-1x wd-personal-edit-avatar"></i>

                </div>


                <div className="row ms-4 pe-0 pt-2 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">First Name</p>
                    <textarea id="edit-profile-placeholder"
                              className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                              rows="1"
                              placeholder= {profile.firstName}
                              onChange={(event) =>
                                  setProfile({...profile, firstName: event.target.value})}>
                    </textarea>
                </div>

                <div className="row ms-4 pe-0 pt-2 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">Last Name</p>
                    <textarea id="edit-profile-placeholder"
                              className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                              rows="1"
                              placeholder= {profile.lastName}
                              onChange={(event) =>
                                  setProfile({...profile, lastName: event.target.value})}>
                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">Bio</p>
                    <textarea id="edit-profile-placeholder"
                              className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                              rows="3"
                              placeholder={profile.bio}
                              onChange={(event) =>
                                  setProfile({...profile, bio: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">Location</p>
                    <textarea id="edit-profile-placeholder"
                              className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                              rows="1" placeholder={profile.location}
                              onChange={(event) =>
                                  setProfile({...profile, location: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">Website</p>
                    <textarea id="edit-profile-placeholder"
                              className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                              rows="1" placeholder={profile.website}
                              onChange={(event) =>
                                  setProfile({...profile, website: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 mb-4 col-11 wd-personal-edit-info-frame">
                    <p className="ps-1 mb-1 text-white-50">Date of Birth</p>
                    <input id="edit-profile-placeholder"
                           className="ps-1 pb-1 mb-1 text-white wd-personal-edit-info"
                           placeholder={profile.dateOfBirth}
                           type="text"
                           onChange={(event) =>
                               setProfile({...profile, dataOfBirth: event.target.value})}/>
                </div>

            </div>
        </>
    )
}

export default EditProfileComponent;