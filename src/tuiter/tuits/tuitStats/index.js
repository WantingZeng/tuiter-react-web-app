import React from "react";

const TuitStats = (
    {
        tuit = { "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": " .2h",
            "image": "starship.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": " @spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }}
) => {

    return(
        <div className="row">
            <ul className="nav mb-2 ">
                {/*//tab*/}
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#">
                        <i className="bi bi-chat"></i> {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#">
                        <i className="bi bi-reply"></i> {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">

                    <a className="nav-link text-secondary fg-color-red" href="#">
                        <i className={tuit.liked? `bi bi-heart-fill ` : `bi bi-heart`} style={tuit.liked? {color:"red"}: {color:""}}>
                        {/*<i className="bi bi-heart" style={tuit.liked?{fill:"red"}:{color:""}}>*/}
                        </i> {tuit.likes}
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#">
                        <i className="bi bi-share"></i>
                    </a>
                </li>
            </ul>
        </div>

    );

  
}; export default TuitStats;