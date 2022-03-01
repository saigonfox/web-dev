import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item override-bs wd-page-element"><strong>Who to follow</strong></li>
                ${who.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
            <!-- continue here -->
            </ul>
`); }

export default WhoToFollowList;