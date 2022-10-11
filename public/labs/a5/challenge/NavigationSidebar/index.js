console.log(window.location.pathname)
//
// const open = window.open("/tuiter-react-web-app/public/labs/a5/challenge/home.html",
//                          "_blank")
// const getId = $("#home");
// console.log(getId)


function NavigationSidebar(){
    return (`
    <ul class="list-group">

        <li class="list-group-item">
            <i class="fab fa-twitter"></i>
        </li>
       <nav>
       <a href="/labs/a5/challenge/home.html" class="list-group-item active">
            <i class="fas fa-home"></i>
            Home
        </a>

        <a href="/tuiter/explore/index.html" 
        class="list-group-item ">
            <i class="fas fa-hashtag"></i>
            Explore
        </a>
        <a href="#" class="list-group-item"> 
            <i class="fas fa-bell"></i>
            Notifications
        </a>
        <a href="#" class="list-group-item">
            <i class="fas fa-envelope"></i>
            Messages
        </a>
        <a href="#" class="list-group-item">
            <i class="fas fa-bookmark"></i>
            Bookmarks
        </a>
        <a href="#" class="list-group-item">
            <i class="fas fa-list"></i>
            Lists
        </a>
        <a href="#" class="list-group-item">
            <i class="fas fa-user"></i>
           Profile
        </a>
        <a href="#" class="list-group-item">
            <i class="fas fa-splotch"></i>
            More
        </a>
        </nav>
        

    </ul>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">
        Tuit
    </button>
    `);

}
$(NavigationSidebar)