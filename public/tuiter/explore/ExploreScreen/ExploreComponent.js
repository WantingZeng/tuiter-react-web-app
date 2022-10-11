import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
        <!-- search field and cog -->
        <div class="row">
            <div class="col-11 position-relative">
                <input  class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                <span class="position-absolute wb-search-tuiter-position">
                <i class="fas fa-search"></i>
                    </i></span>
            </div>
            <div class="col-1">
                <a href="explore-settings.html" class="wb-gear-setting">
                    <i class="fas fa-cog"></i>
                </a>
            </div>
        </div>
        
        </div>
        <ul class="nav mb-2 nav-tabs mt-1 mb-1">
        <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative">
            <img src="starship.jpeg" class="img-fluid">
            <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;