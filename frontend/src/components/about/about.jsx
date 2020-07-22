import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  window.scrollTo(0, 0)

  return (
    <div className="about-parent">
      <div className="team-blurb">
        {/* <div className="team-pic"> pic</div> */}
        <div className="team-content">
          <div className="team-title"> About Us</div>
          <div className="team-body"><p>
            We are a group of remotely-linked Full Stack Engineers who are
            energized by the power programming gives us to create meaningful
            connections in this uncertain time PoliSee was developed over the
            course of a week in June of 2020 using MERN, NodeMailer, and
            Mongo-Agenda.</p> 
            <p>Please feel free to reach out to any of us for any
            reason. </p> 
            <p>Thanks for stopping by!</p>
          </div>
        </div>
      </div>
      <div className="divider">{/* Chris */}</div>
      <div className="about-box">
        <div className="about-blurb">
          <div className="pic-text-box">
            <div className="chris-pic"></div>
            <div className="about-content">
              <div className="about-content">
                <div className="about-title"> Chris Simons</div>
                <div className="team-role"> Project Lead</div>
                <div className="about-body">
                  <p>Hi, thanks for taking the time to visit the site! </p>
                  <p> </p>
                  <p>
                  I came up with the idea of PoliSee to build a
                    platform that could help people tap into their power to influence their government.
                    As a software engineer I have a passion for making platforms
                    that allow people to better digest information, or get their
                    voice into the world
                    {" "}
                  </p>
                  <p>
                    {" "}
                    On a less serious note I'm a big fan of Video Games, Spaghetti Westerns, and Camping. 
                    While politics and law are certianly interests of mine, I really am interested in using sofware engineering to give form to interesting ideas!
                    Please feel free to reach out and contact me with any questions or oportunities. 
                    Have a nice day!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-links">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/christopher-simons-4184a6a0/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chris6135">
              {" "}
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/chris-simons-2">
              {" "}
              <FontAwesomeIcon icon={["fab", "angellist"]} />{" "}
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://chris6135.github.io/">
              {" "}
              <FontAwesomeIcon icon={["fas", "user"]} />{" "}
            </a>
          </div>
        </div>
      </div>

      {/*Akif*/}

      <div className="about-box">
        <div className="about-blurb">
          <div className="akif-pic"></div>
          <div className="about-content">
            <div className="about-content">
              <div className="about-title"> Akif Saifi</div>
              <div className="team-role"> Project Flex</div>
              <div className="about-body">
                <p>
                  I'm passionate about history and politics, and fascinated by
                  the longlasting effects they can have on our society. Our hope
                  with Polisee was to streamline the process of getting in touch
                  with your representatives, because getting your voice heard is
                  now more important than ever.
                </p>
                <p>
                  I primarily worked on integrating the various APIs into our
                  application and handling the responses to maximize efficiency
                  and usability. I hope you found the information gathered by
                  Polisee useful and feel empowered to get involved. Please feel
                  free to reach out and get in touch about any opportunities you
                  might have, and don't forget to vote.
                </p>
              </div>
            </div>
          </div>
          <div className="about-links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akifsaifi">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/akif2543">
              {" "}
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="https://angel.co/u/akifsaifi">
              {" "}
              <FontAwesomeIcon icon={["fab", "angellist"]} />{" "}
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="http://akif2543.github.io/">
              {" "}
              <FontAwesomeIcon icon={["fas", "user"]} />{" "}
            </a>
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
                            <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/eric-smith-8832b41aa/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/ericsmith9161"> <FontAwesomeIcon icon={["fab", "github"]} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/eric-smith-105">  <FontAwesomeIcon icon={["fab", "angellist"]} /> </a>
                            <a target="_blank "  rel="noopener noreferrer"href="https://ericsmith9161.github.io/">  <FontAwesomeIcon icon={["fas", "user"]} /> </a>

                        </div>
                    </div>
                </div>  


  
      {/* Megan */}

      <div className="about-box">
        <div className="about-blurb">
          <div className="megan-pic"></div>
          <div className="about-content">
            <div className="about-content">
              <div className="about-title"> Megan McNulty</div>
              <div className="team-role"> Frontend Lead</div>
              <div className="about-body"><p>
              Hi! Besides coding (and building custom SVGs!) I’m passionate about tons of things! Not the least of which being Disney movies and Dungeons and Dragons!
I love programming because it gives me the ability to build up functional (and mostly) fancy things to play with and watch! 
                </p>
                <p>
                I acted as both a graphic designer and a front facing lead for all of the styling here on the site! My job was not only to come up with the layout for the site, but to make
sure the information we were pulling in was organized in an easy to read and generally pleasing way. At the time of writing this I've actually started working as an instructor for App Academy, but please feel free to reach out with any opportunities!
                </p>

              </div>
            </div>
          </div>
          <div className="about-links">
          <a target="_blank" rel="noopener noreferrer noreferrer"  href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a target="_blank" rel="noopener noreferrer noreferrer" href="https://github.com/mmcnulty20">
              {" "}
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a target="_blank" rel="noopener noreferrer noreferrer" href="">
              {" "}
              <FontAwesomeIcon icon={["fab", "angellist"]} />{" "}
            </a>
            <a target="_blank" rel="noopener noreferrer noreferrer" href="">
              {" "}
              <FontAwesomeIcon icon={["fas", "user"]} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
