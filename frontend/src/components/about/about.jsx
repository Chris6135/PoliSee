import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const About = (props) => {
  const [headSearchStr, setHeadSearchStr] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

        return (
        <div className ="about-parent">
                <div className= "team-blurb">
                    <div className="team-pic"> pic
                    </div>
                    <div className="team-content">
                        <div className="team-title"> About Us</div>
                        <div className="team-body">We are a group of four fullstack devlopers who created PoliSee both</div>

                    </div>



                </div>
                <div className ="divider">

                </div>
                <div className="about-box">
                    <div className= "about-blurb">
                        <div className="about-pic">
                        </div>
                        <div className="about-content">
                            <div className="about-content">
                                <div className="about-title"> title</div>
                                <div className="about-body">Hottie bottie</div>

                            </div>
                        <div className="about-links"> 
                            <div>linked-In</div>
                            <div>Github</div>
                            <div>Angel List</div>
                            <div>Personal Site</div>
                        
                        </div>
                        </div>
                    </div>
                </div>  
        </div>)

}

export default About