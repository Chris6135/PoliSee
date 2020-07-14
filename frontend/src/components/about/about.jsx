import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
                        <div className="team-body">We are a group of remotely linked Full Stack Engineers who are energized by the power programming gives us to create meaningful connections in this uncertain time
                            PoliSee was developed over the course of a week in June of 2020 using MERN, NodeMailer, and Mongo-Agenda.  
                            Please feel free to reach out to any of us for any reason
                             Thanks for stopping by
                            </div>

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
                                    <div className="about-body">
                                        <p>Hi, thanks for taking the time to visit the site! </p>
                                    <p>I came up with the idea of PoliSee to try and make a platform that could help people take ownership of their ability to influence their government. 
                                        Given that, it shouldn't be suprising that I'm passionate about politics, law and government. </p>
                                    <p> As a software engineer I have a passion for making platforms that allow people to better digest information, or get their voice into the world. 
                                        I'm mesmerized by the oportunities programming provides to interact with our world and the information that fills it. 
                                    </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="about-links"> 
                        <a target="_blank" href="https://www.linkedin.com/in/christopher-simons-4184a6a0/"><FontAwesomeIcon icon={["fab","linkedin"]}/></a>
                           <a target="_blank" href="https://github.com/Chris6135"> <FontAwesomeIcon icon={["fab","github"]}/></a>
                         <a target="_blank" href="https://angel.co/u/chris-simons-2">  <FontAwesomeIcon icon={["fab","angellist"]}/> </a>
                         <a target="_blank" href="">  <FontAwesomeIcon icon={["fas","user"]}/> </a>

                    
                            </div>
                    </div>
                </div>  

                {/*Akif*/}

                <div className="about-box">
                    <div className="about-blurb">
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
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            <FontAwesomeIcon icon={["fab", "angellist"]} />
                            <FontAwesomeIcon icon={["fas", "user"]} />

                        </div>
                    </div>
                </div>  

                {/* Eric */}

                <div className="about-box">
                    <div className="about-blurb">
                        <div className="eric-pic">
                        </div>
                        <div className="about-content">
                            <div className="about-content">
                                <div className="about-title"> Eric Smith </div>
                                <div className="team-role"> Backend Lead </div>
                                <div className="about-body">
                                    <p>Howdy.</p>
                                    <p>I joined PoliSee in order to use programming to positively affect those around me, and gain experience with the the types of projects I would like to contribute to in the future.
                                    </p>
                                    <p></p>
                                    <p>When I'm not programming I enjoy reading, eating, wine, video-games and long walks - though I enjoy the walks far more if they end up with me in a lake.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="about-links">
                            <a target="_blank" href="https://www.linkedin.com/in/eric-smith-8832b41aa/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                            <a target="_blank" href="https://github.com/ericsmith9161"> <FontAwesomeIcon icon={["fab", "github"]} /></a>
                            <a target="_blank" href="https://angel.co/u/eric-smith-105">  <FontAwesomeIcon icon={["fab", "angellist"]} /> </a>
                            <a target="_blank" href="https://ericsmith9161.github.io/">  <FontAwesomeIcon icon={["fas", "user"]} /> </a>

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
                        <FontAwesomeIcon icon={["fab","linkedin"]}/>
                            <FontAwesomeIcon icon={["fab","github"]}/>
                            <FontAwesomeIcon icon={["fab","angellist"]}/>
                            <FontAwesomeIcon icon={["fas","user"]}/>
                    
                            </div>
                    </div>
                </div>  
        </div>)

}

export default About