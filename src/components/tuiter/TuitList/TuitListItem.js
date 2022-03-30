import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem = ({
        tuit = {
            "_id": "567",
            "topic": "Space",
            "postedBy": {
                "username": "SpaceX"
            },
            "liked": false,
            "verified": false,
            "handle": "spacex",
            "title": "",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "image": "../images/starship.png"
            },
            "time": "last month",
            "logo-image": "../../../images/node.png",
            "avatar-image": "../../../images/node.png",
            "tuits": "120K",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
        }
    }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        <>
            <li className="list-group-item">
                <div className="row pt-1">

                    <div className="col-2 ps-1 pe-0 wd-profile-frame">
                        <img src={tuit["avatar-image"]} alt="avatar" className="img-fluid wd-profile-image"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <p className="m-0 fs-6">
                                <span className="wd-text-bold text-white">{tuit.postedBy.username} </span>
                                <span className="text-white-50">@{tuit.handle}</span>
                                    <i onClick={() =>
                                        deleteTuit(tuit)}
                                       className="fas fa-remove fa-pull-right ms-6">
                                    </i>
                                </p>
                            <p className="m-0 text-white">{tuit.tuit}</p>
                        </div>

                        <div className="row mt-2 m-0 p-0">
                            {
                                tuit.attachments && tuit.attachments.video &&
                                <iframe className="wd-tuit-media m-0 p-0" width="600" height="320"
                                        src={tuit.attachments.video} title="SpaceX YOUTUBE" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            }
                            {
                                tuit.attachments && tuit.attachments.image &&
                                <img src={tuit.attachments.image} alt="static attachment" className="wd-tuit-media m-0 p-0"/>
                            }
                        </div>

                        <TuitStats tuit={tuit}/>


                    </div>
                </div>
            </li>

        </>
    )
}

export default TuitListItem;