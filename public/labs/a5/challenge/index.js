import PostSummaryList from "./PostSummaryList/index.js";
import ExploreHomeComponent from "./HomeScreen/index.js";

function init(){
    $('#wd-explore').append(`
<div class="container pt-1">
    <div>
        <h1>Explore Home Page</h1>
        <div class="row">
            <div class="col-2">
                ${NavigationSidebar()}
            </div> 
            <div class="col-6">
                ${ExploreHomeComponent()}
            </div> 
            <div class="col-4">
               ${PostSummaryList()}
            </div> 
        </div>
    </div>

    


</div>
    `);

}
$(init)