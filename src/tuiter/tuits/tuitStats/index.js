import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

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

    const dispatch = useDispatch();
    const updateTuitHandler = (tuit) =>{
        dispatch(updateTuitThunk(tuit))
    }


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
                        <i className="bi bi-reply"></i>
                        {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">

                    <a className="nav-link text-secondary fg-color-red">
                        <i className={tuit.liked? `bi bi-heart-fill ` : `bi bi-heart`} style={tuit.liked? {color:"red"}: {color:""}}
                           onClick={() => updateTuitHandler({
                               ...tuit,
                               likes: tuit.likes + 1})}>
                            {tuit.likes}
                        </i>

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