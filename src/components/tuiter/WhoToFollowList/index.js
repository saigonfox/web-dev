import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
            <ul className="list-group">
                <li className="list-group-item override-bs wd-page-element"><strong>Who to follow</strong></li>
                {who.map(who => {
                        return(<WhoToFollowListItem who={who} key={who._id}/>);
                    })
                }
            </ul>
); }

export default WhoToFollowList;