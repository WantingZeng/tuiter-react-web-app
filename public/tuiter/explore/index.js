import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";
function init(){
    $('#wd-explore').append(`
<div class="container pt-1">
    <div>
        <h1>Explore</h1>
        <div class="row">
            <div class="col-2">
                ${NavigationSidebar()}
            </div> 
            <div class="col-6">
                ${ExploreComponent()}
            </div> 
            <div class="col-4">
               ${WhoToFollowList()}
            </div> 
        </div>
    </div>

    


</div>
    `);

}
$(init)