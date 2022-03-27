import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <>
        <li className="list-group-item override-bs wd-page-element ">
            <div className="row">
                <div className="col-2 ">
                    <img src={who.avatarIcon}
                    className="wd-follow-image"/>
                </div>
                <div className="col-6 ">
                    <p className="wd-follow-text mt-0 mb-0">{who.userName}
                        <i className="fa-solid fa-circle"></i>
                    </p>
                    <p className="mt-0 mb-0">@{who.handle}</p>
                </div>
                <div className="col-4 mt-1">
                    <button className="btn btn-primary wd-follow-btn text-center">
                        <span>Follow</span>
                    </button>
                </div>
            </div>
        </li>
        </>
        );
    }

export default WhoToFollowListItem;