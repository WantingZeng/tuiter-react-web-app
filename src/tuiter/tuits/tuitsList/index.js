import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "../TuitsItem";
import {useDispatch} from "react-redux";



const TuitsList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <ul className="list-group">

            {
                tuits.map(tuit =>
                                   <TuitsItem
                                       key={tuit._id} tuit={tuit}/>,
                 )


            }
        </ul>
    );
};
export default TuitsList;