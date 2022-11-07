import React from "react";
import TuitStats from "./tuitStats";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsItem = (
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
    const tuits = useSelector(state => state.tuits)
    //console.log(tuits)

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" src={require(`./spacex.png`)} width="100%"/>
                    </div>
                    <div className="col-10">
                        <div>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                  <span>
                        {tuit.userName}
                      <i className="bi bi-check-circle-fill"></i>
                        <span className="text-secondary">
                            {tuit.handle} {tuit.time}
                        </span>
                  </span>
                            <div>
                                {tuit.tuit}
                            </div>
                        </div>

                        <div>
                            <TuitStats key={tuit._id} tuit={tuit}/>
                        </div>

                    </div>


                </div>

        </li>

    );
};
export default TuitsItem;