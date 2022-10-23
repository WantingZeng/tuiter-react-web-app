import React from "react";
import {Link} from "react-router-dom";
import {editProfile} from "../profile/profile-reducer";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const EditProfile = () => {

    const dispatch = useDispatch();
    const editProfileHandler = () =>{
        dispatch((editProfile));
    }
    return(
        <>
            <div className="row">
                <div className="col-1 ">
                    <Link to="/tuiter/profile" className="btn btn-close"></Link>
                </div>
                <div className="col-9">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
                <div className="col-auto">
                    <Link to="/tuiter/profile" className="btn border rounded-5 bg-black text-white fw-bold"
                    onClick={() => editProfileHandler()}>Save</Link>
                </div>
                <div className="position-relative">
                    <img src={require(`../image/background.jpeg`)} width="100%"/>
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <button className="btn rounded-circle text-white bg-secondary"><i className="bi bi-camera"></i></button>
                        <button className="btn rounded-circle text-white bg-secondary"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="position-absolute ">
                        <div className="position-relative start-50" >
                            <img className="rounded-circle translate-middle bg-white" src={require(`../image/react.png`)}  width="25%"/>
                            <button className="btn rounded-circle position-absolute start-0  translate-middle text-white bg-secondary "><i className="bi bi-camera"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="inputName"
                               placeholder="firstname lastname">
                        </input>
                            <label htmlFor="inputName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave bios here"
                                  id="inputBio" style={{height:100}}></textarea>
                        <label htmlFor="inputBio">Bio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="location" className="form-control" id="inputLocation"
                               placeholder="boston">
                        </input>
                        <label htmlFor="inputLocation">Location</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="website" className="form-control" id="inputWebsite"
                               placeholder="website.com">
                        </input>
                        <label htmlFor="inputWebsite">Website</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputBirth">Birth Date</label>
                        <input type="birthday" className="form-control" id="inputBirth"
                               placeholder="MM/DD/YY">
                        </input>
                    </div>
                    <div className="row mb-lg-5">
                        <div className="col-11">
                            <h6>Switch to professional</h6>

                        </div>
                        <div className="col-1">

                                <i className="bi bi-chevron-right"></i>

                        </div>
                    </div>




                </div>





            </div>
        </>
    );

};
export default EditProfile;