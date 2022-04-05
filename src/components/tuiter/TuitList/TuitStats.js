import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions"

const TuitStats = (
    {
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
    return (
        <div className="row mt-3">
            <div className="row col-2">
                <p className="col-1">
                    <a href="./comment.html">
                        <i className="wd-post-icon fa-regular fa-comment"></i>
                    </a>
                </p>
                <p className="col-1 ms-0">{tuit.stats?.comments}</p>
            </div>
            <div className="row col-2 ms-2">
                <p className="col-1">
                    <a href="./tweet.html">
                        <i className="wd-post-icon fa-solid fa-retweet"></i>
                    </a>
                </p>
                <p className="col-1 ms-0">{tuit.stats?.retuits}</p>
            </div>
            <div className="row col-3 ms-2"
                 onClick={() => updateTuit(dispatch,
                     {...tuit, stats : {...tuit.stats,
                             likes: tuit.stats?.likes + 1}
                     })
                 }
            >
                    <p className="col-1">
                        <i className="wd-post-icon fa-regular fa-thumbs-up"></i></p>

                {<p className="col-1 ms-0}">{tuit.stats?.likes}</p>}
            </div>
            <div className="row col-3 ms-2"
                 onClick={() => updateTuit(dispatch,
                     {...tuit, stats : {...tuit.stats,
                             dislikes: tuit.stats?.dislikes + 1}
                     })
                 }
            >
                <p className="col-1">
                    <i className="wd-post-icon fa-regular fa-thumbs-down"></i></p>

                {<p className="col-1 ms-0}">{tuit.stats?.dislikes}</p>}
            </div>

            {/*<div className="row col-3 ms-3"*/}
            {/*     onClick={likeTuit}>*/}
            {/*    {*/}
            {/*        tuit.liked &&*/}
            {/*        <p className="col-1">*/}
            {/*            <i className="wd-post-icon fa-solid fa-heart"*/}
            {/*               style={{color: 'red'}}></i></p>*/}

            {/*    }*/}
            {/*    {*/}
            {/*        !tuit.liked &&*/}
            {/*        <p className="col-1">*/}
            {/*            <i className="wd-post-icon fa-regular fa-heart"></i></p>*/}
            {/*    }*/}
            {/*    {<p className="col-1 ms-0}">{tuit.stats?.likes}</p>}*/}
            {/*</div>*/}
            <div className="row col-2 ms-4">
                <p className="">
                    <a href="./upload.html">
                        <i className="wd-post-icon fa-solid fa-upload"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}
export default TuitStats;

