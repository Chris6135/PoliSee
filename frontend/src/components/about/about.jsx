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
                        <div className="team-body">We are a group of remotely linked Full Stack Engineers </div>

                    </div>



                </div>
                <div className ="divider">

                    {/* Chris */}

                </div>
                <div className="about-box">
                    <div className= "about-blurb">
                        <div className="pic-text-box">
                            <div className="chris-pic"></div>
                            <div className="about-content">
                                <div className="about-content">
                                    <div className="about-title"> Chris Simons</div>
                                    <div className="team-role"> Project Lead</div>
                                    <div className="about-body">Hi, Im chris. stuff will go here about how chrislike I am. </div>

                                </div>
                            </div>
                        </div>
                        <div className="about-links"> 
                            <div>linked-In</div>
                            <div>Github</div>
                            <div>Angel List</div>
                            <div>Personal Site</div>
                    
                            </div>
                    </div>
                </div>  

                {/*Akif*/}

                <div className="about-box">
                    <div className= "about-blurb">
                        <div className="about-pic">
                        </div>
                        <div className="about-content">
                            <div className="about-content">
                                <div className="about-title"> Name</div>
                                <div className="team-role"> Team Role</div>
                                <div className="about-body">description</div>

                            </div>
                        </div>
                        <div className="about-links"> 
                            <div>linked-In</div>
                            <div>Github</div>
                            <div>Angel List</div>
                            <div>Personal Site</div>
                    
                            </div>
                    </div>
                </div>  

                {/* Eric */}

                <div className="about-box">
                    <div className= "about-blurb">
                        <div className="about-pic">
                        </div>
                        <div className="about-content">
                            <div className="about-content">
                                <div className="about-title"> Name</div>
                                <div className="team-role"> Team Role</div>
                                <div className="about-body">description</div>

                            </div>
                        </div>
                        <div className="about-links"> 
                            <div>linked-In</div>
                            <div>Github</div>
                            <div>Angel List</div>
                            <div>Personal Site</div>
                    
                            </div>
                    </div>
                </div>  

                {/* Megan */}

            
                <div className="about-box">
                    <div className= "about-blurb">
                        <div className="about-pic">
                        </div>
                        <div className="about-content">
                            <div className="about-content">
                                <div className="about-title"> Name</div>
                                <div className="team-role"> Team Role</div>
                                <div className="about-body">description</div>

                            </div>
                        </div>
                        <div className="about-links"> 
                            <div>linked-In</div>
                            <div>Github</div>
                            <div>Angel List</div>
                            <div>Personal Site</div>
                    
                            </div>
                    </div>
                </div>  
        </div>)

}

export default About