import React from "react";
import {Link} from "react-router-dom";
import { deleteProfile} from "./profile-reducer";
import {useDispatch, useSelector} from "react-redux";



const profilesItem = (
    {
        person = {
            "_id": 123,
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "@jannunzi",
            "profilePicture": "jose.png",
            "bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevt",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223,
            "tuitsCount": 6114
}}
) => {




    return(
        <div className="border border-opacity-25 rounded-3">
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-arrow-left btn btn-lg"></i>
                </div>
                <div className="col-10">
                    <div>
                        <h5>{person.firstName} {person.lastName}</h5>
                    </div>
                    <div className="text-secondary">
                        {person.tuitsCount} Tuits
                    </div>
                </div>
            </div>
            <div>
                <img src={require(`../image/background.jpeg`)} width="100%" />
            </div>
            <div className="row">
                <div className="col-9 position-relative">
                    <img className="rounded-circle position-absolute end-50 translate-middle bg-white  " src={require(`../image/react.png`)}  width="25%"/>
                </div>
                <div className="navbar col-3">
                    <Link to="/tuiter/edit-profile" className="btn border rounded-4 "> Edit Profile</Link>
                </div>
            </div>
<br/>
            <div>
                <h4 className="fw-bold">{person.firstName} {person.lastName}</h4>
                <h6 className="text-secondary">{person.handle}</h6>
            </div>
            <div>
                {person.bio}
            </div>
            <br/>
            <div className="row text-secondary">
                <div className="col-4">
                    <i className="bi bi-geo-alt"></i>
                    {person.location}
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon"></i>
                    Born {person.dateOfBirth}
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar3"></i>
                    Joined {person.dateJoined}
                </div>
            </div>
            <br/>
            <div className="row text-secondary">
                <div className="col-auto">
                    <span className="text-black">{person.followingCount}</span>  Following
                </div>
                <div className="col-auto">
                    <span className="text-black">{person.followersCount}</span> Followers
                </div>

            </div>

        </div>

    );

};
export default profilesItem