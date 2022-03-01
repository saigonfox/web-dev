const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item override-bs wd-page-element ">
            <div class="row">
                <div class="col-2 ">
                    <img src=${who.avatarIcon}
                    class="wd-follow-image">
                </div>
                <div class="col-6 ">
                    <p class="wd-follow-text mt-0 mb-0">${who.userName}
                        <i class="fa-solid fa-circle"></i>
                    </p>
                    <p class="mt-0 mb-0">@${who.handle}</p>
                </div>
                <div class="col-4 mt-1">
                    <button class="btn btn-primary wd-follow-btn text-center">
                        <span>Follow</span>
                    </button>
                </div>
            </div>
        </li>`);

}
export default WhoToFollowListItem;