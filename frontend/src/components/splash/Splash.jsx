import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import SearchBar from "../search/search_bar";
import { fetchRepresentatives } from "../../actions/search_actions";
import logo from "../../icons/logo.svg";
import Star from "../../icons/Star.svg";


const Splash = (props) => {
  const [headSearchStr, setHeadSearchStr] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const formatAddress = (string) =>
    string
      .trim()
      .split("")
      .filter((c) => c !== "," || c !== ".")
      .join("")
      .split(" ")
      .join("%20");

  let loggedInStuff;
  if (props.user) {
    loggedInStuff = (
      <div className="splash-header-right">
        <form
          className="splash-header-search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            const search = formatAddress(headSearchStr);
            dispatch(fetchRepresentatives(search)).then(
              history.push(`/search?address=${search}&levels=all&issues=all`)
            );
          }}
        >
          <input
            type="text"
            value={headSearchStr}
            onChange={(e) => setHeadSearchStr(e.target.value)}
            placeholder="Find Your Representatives"
          />
          <button className="header-search-icon">
            <FontAwesomeIcon icon="search" flip="horizontal" />
          </button>
        </form>
        <div onClick={() => props.logout()} className="signin-button">
          <div>Log Out</div>
        </div>
        <Link to="/edit" className="signup-button">
          <div>Edit</div>
        </Link>
      </div>
    );
  } else {
    loggedInStuff = (
      <div className="splash-header-right">
        <form
          className="splash-header-search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            const search = formatAddress(headSearchStr);
            dispatch(fetchRepresentatives(search)).then(
              history.push(`/search?address=${search}&levels=all&issues=all`)
            );
          }}
        >
          <input
            type="text"
            value={headSearchStr}
            onChange={(e) => setHeadSearchStr(e.target.value)}
            placeholder="Find Your Representatives"
          />
          <button className="header-search-icon">
            <FontAwesomeIcon icon="search" flip="horizontal" />
          </button>
        </form>
        <Link to="/login" className="signin-button">
          <div>Sign In</div>
        </Link>
        <Link to="/register" className="signup-button">
          <div>Sign Up</div>
        </Link>
      </div>
    );
  }
  const dropdown = () => {
    return (
      <div className="header-drop-content">
        <p>Welcome to PoliSee!</p>
        <p>Begin by entering an adress into the search bar</p>
        <p>Select levels to only see representitives at your chosen level</p>
        <p>
          Selecting issues will limit results to reps who deal with those
          issues!
        </p>
      </div>
    );
  };
  return (
    <div className="splash">
      <section className="splash-top">
        <section className="splash-header">
          <div className="splash-header-left">
            <div className="splash-header-logo">
              <img src={logo} />
            </div>
            <div className="information-dropdown">
              <div className="header-drop-btn">
                <span>?</span>
              </div>
              {dropdown()}
            </div>
          </div>

          {loggedInStuff}
        </section>
        <section className="splash-search-text">
          <div className="splash-search-text-container">
            <div className="splash-search-text-title">
              Find your representatives
            </div>
            <div className="splash-search-text-subtitle">
              Participate in your government
            </div>
          </div>
        </section>
        <section className="splash-searchbar">
          <SearchBar />

          {/* <div className="splash-searchbar-searchbar">

        </div>
        <div className="splash-searchbar-gov-lvl">

        </div>
        <div className="splash-searchbar-interests">

        </div>
        <div className="splash-searchbar-search-btn">

        </div> */}
        </section>
      </section>

      <section className="splash-body">
        <section className="splash-body-one">
          <div className="splash-body-one-one">
            <div className="splash-body-one-one-title-container">
              <div className="splash-body-one-one-title-thin">
                Regular contact
              </div>

              <div className="splash-body-one-one-title-bold">Made Easy</div>
            </div>

            <div className="splash-body-one-one-body-container">
              <div className="splash-body-one-one-body">
                Persistence is key!
              </div>
              <div className="splash-body-one-one-body">
                Regular emails and texts make it easy to keep contact
                consistent.
              </div>
            </div>
          </div>

          <div className="splash-body-one-two">
            <div className="splash-body-one-two-title-container">
              <div className="splash-body-one-two-title-bold">
                get your voice
              </div>
              <div className="splash-body-one-two-title-thin">to the</div>
              <div className="splash-body-one-two-title-bold">right people</div>
            </div>

            <div className="splash-body-one-two-body-container">
              <div className="splash-body-one-two-body">
                PoliSee makes it easy to see representatives for your area that
                can affect your issues!
              </div>
              <div className="splash-body-one-two-body">
                We can tell you who is in charge of making the changes that
                matter most <span>to you.</span>
              </div>
            </div>
          </div>

          <div className="splash-body-one-three">
            <div className="splash-body-one-three-title-container">
              <div className="splash-body-one-three-title-bold">Keep tabs</div>
              <div className="splash-body-one-three-title-thin">on your</div>
              <div className="splash-body-one-three-title-bold">OFFICIALS</div>
            </div>

            <div className="splash-body-one-three-body-container">
              <div className="splash-body-one-three-body">
                Live news updates and voter information keep you informed on
                exactly what your representitive is for
              </div>
              <div className="splash-body-one-three-body">...and against!</div>
            </div>
          </div>
        </section>

        <section className="splash-body-two">
          <div className="splash-body-showpage-container">
            <div className="splash-body-politician-show">
              <div className="splash-body-politican-show-upper-container">
                <div className="splash-body-politician-show-upper-photo"></div>

                <div className="splash-body-politician-show-upper-text-container">
                  <div className="splash-body-politician-show-upper-text-box"></div>
                  <div className="splash-body-politician-show-upper-text-box"></div>
                  <div className="splash-body-politician-show-upper-text-box"></div>
                </div>
              </div>

              <div className="splash-body-politican-show-middle-container"></div>

              <div className="splash-body-politican-show-lower-container">
                <div className="splash-body-politican-show-middle-container-left"></div>

                <div className="splash-body-politican-show-middle-container-right"></div>
              </div>
            </div>
            <div className="splash-body-politician-show-explanation">
              <div className="splash-body-politician-show-description-title">
                Profiles
                <br />
                Worth Reading
              </div>
              <div className="splash-body-politician-show-description-body">
                Check each politician's page to see how long they've been in
                office, when they're up for re-election, voting history, and
                recent news.
              </div>
              <div className="splash-body-politician-show-description-body">
                Save and watch your representatives to stay up to date on how
                they treat your issues.
              </div>
            </div>
          </div>
        </section>
        <div className="source-info-container">
          <section className="splash-source-information">
            <div className="open-source-header">
              This project is open source
            </div>
            <div className="open-source-subtitle">find us on</div>
            <a
              target="_blank"
              href="https://github.com/Chris6135/PoliSee"
              className="github-repo-info"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="6x" />
            </a>
            <div className="open-source-subtitle">Data sourced from</div>
            <div className="api-boxes">
              <a
               target="_blank"
                href="https://www.propublica.org/datastore/api/propublica-congress-api"
                className="api-box"
              >
                propublica
              </a>
              <a  target="_blank" href="https://contextualweb.io/news-api/" className="api-box">
                Contextualweb
              </a>
              <a 
                target="_blank"
                href="https://developers.google.com/civic-information"
                className="api-box"
              >
                google civics
              </a>
            </div>
          </section>
        </div>
        <section className="splash-body-bottom">
          <div className="logo">
            <img src={Star} />
          </div>
          <div className="splash-body-bottom-links">
            <span>Voter Registration Info</span>
            <div></div>
            <a target="_blank" href="https://www.usa.gov/register-to-vote">Register to Vote!</a>
            <a target="_blank" href="https://www.vote.org/polling-place-locator/">Find your Polling Place</a>
            <a target="_blank" href="https://www.usa.gov/confirm-voter-registration">Check if you're registered</a>
          </div>
          <div className="splash-body-bottom-links">
            <span>Government Resources</span>
            <div></div>
            <a target="_blank" href="https://www.loc.gov/">Library of Congress</a>
            <a target="_blank" href="https://www.house.gov/">House of Representatives</a>
            <a target="_blank" href="https://www.senate.gov/">US Senate</a>
          </div>
          <div className="splash-body-bottom-links">
            <span>Additional Resources</span>
            <div></div>
            <a target="_blank" href="https://www.commoncause.org/">Common Cause</a>
            <a target="_blank" href="https://www.aclu.org/">American Civil Liberties Union</a>
            <a target="_blank" href="https://www.pewtrusts.org/en">The PEW Charitable Trusts</a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Splash;
