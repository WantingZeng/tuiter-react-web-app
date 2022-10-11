const WhoToFollowListItem = (who) => {
    return (`
       <li class="list-group-item">
           <div class="row">
                <div class="col-3">
                     <img class="rounded-circle img-fluid" src="${who.avatarIcon}" ">
                </div>
                <div class="col-5">
                    <div class="fw-bolder">
                        <span style="font-size: smaller">${who.userName} </span>
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                         @${who.handle}
                    </div>
                </div>
                <div class="col-4">
                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                        Follow
                    </botton>
                </div>
           </div>
       </li>
    `)
}
export default WhoToFollowListItem;