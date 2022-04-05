import React from "react";
import {Link} from "react-router-dom"

const ProfileComponent = (
    {
        profile
            =
            {"_id": "001",
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "jannunzi",
            "profilePicture": "jose.png",
            "bannerPicture": "hello.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": "312",
            "followersCount": "180",
            "tuitsCount" : "5196"
        }
    }) => {
    return(
        <div className="mt-2">
            <div className="row">
                <div className="row pe-0 col-12">
                    <div className="col-1 mt-3"><i className="fa-solid fa-arrow-left"></i></div>
                    <div className="col-11 ps-4 ms-0">
                        <h5 className="mb-0 fw-bold">{profile.firstName} {profile.lastName}</h5>
                        <p className="mb-0 text-white-50 small">{profile.tuitsCount} Tuits</p>
                    </div>
                </div>
                <img className="wd-personal-banner" src={profile.bannerPicture} alt={"banner"}/>

                    <img className="wd-personal-avatar"
                         src={profile.profilePicture} alt="profile"/>

                <Link to="/tuiter/profile/editprofile"
                      className="text-decoration-none">
                    <button className="btn float-end wd-personal-edit-profile-button fw-bold text-white ">
                            Edit profile
                    </button>
                </Link>

                <div className="row">
                    <h5 className="mb-0 mt-3 fw-bold text-white">{profile.firstName} {profile.lastName}</h5>
                    <h6 className="mb-0 mt-1 text-white-50">@{profile.handle}</h6>
                    <h6 className="mb-0 mt-3 small text-white">{profile.bio}</h6>
                </div>
                <div className="row mt-2">
                    <div className="row col-5">
                        <p className="mb-0 text-white-50">
                            <i className="fa-solid fa-location-dot fa-xl"></i>
                            <span className="ms-2 text-white-50 small">
                            {profile.location}</span>
                        </p>
                    </div>

                    <div className="row col-3">
                        <p className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">
                            <i className="fa-solid fa-cake-candles fa-lg"></i>
                            <span className="mb-0 ms-2 small">
                            {profile.dateOfBirth}</span>
                        </p>
                    </div>

                    <div className="row col-4">
                        <p className="mb-0 ms-5 ps-0
                        d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">
                            <i className="fa-regular fa-calendar fa-lg"></i>
                            <span className="ms-2 small
                            d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">
                            Joined {profile.dateJoined}</span>
                        </p>
                    </div>

                </div>
                <div className="row mt-2">
                    <div className="row col-4">
                        <p className="fw-bold text-white">{profile.followingCount}
                            <span className="text-white-50 ms-1">
                              Following</span></p>

                    </div>
                    <div className="row col-4">
                        <p className="fw-bold ms-5 text-white">{profile.followersCount}
                            <span className="text-white-50 ms-1">Followers</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileComponent;

