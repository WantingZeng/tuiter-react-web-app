function NavigationSidebar(){
    return (`
    <ul class="list-group">

                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-home"></i>
                        Home
                    </li>
                    <li class="list-group-item active">
                        <i class="fas fa-hashtag"></i>
                        Explore
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bell"></i>
                        Notifications
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-envelope"></i>
                        Messages
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bookmark"></i>
                        Bookmarks
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-list"></i>
                        Lists
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        Profile
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-splotch"></i>
                        More
                    </li>

                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>
    `);

}
$(NavigationSidebar)