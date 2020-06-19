import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "./search/search_bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { fetchRepresentatives } from "../actions/search_actions";
import { cronTest } from "../util/cron_util";

const Splash = () => {
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

  return (
    <div className="splash">
      <section className="splash-top">
        <section className="splash-header">
          <div className="splash-header-left">
            <div className="splash-header-logo"></div>
            <div className="splash-header-left-dropdown">
              <div>?</div>
            </div>
          </div>

          <div className="splash-header-right">
            <form
              className="splash-header-search-bar"
              onSubmit={(e) => {
                e.preventDefault();
                const search = formatAddress(headSearchStr);
                dispatch(fetchRepresentatives(search)).then(
                  history.push(
                    `/search?address=${search}&levels=all&issues=all`
                  )
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
              href="https://github.com/Chris6135/PoliSee"
              className="github-repo-info"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="6x" />
            </a>
            <div className="open-source-subtitle">Data sourced from</div>
            <div className="api-boxes">
              <a
                href="https://www.propublica.org/datastore/api/propublica-congress-api"
                className="api-box"
              >
                propublica congress API
              </a>
              <a href="https://newsapi.org/" className="api-box">
                news API
              </a>
              <a
                href="https://developers.google.com/civic-information"
                className="api-box"
              >
                google civic API
              </a>
            </div>
          </section>
        </div>
        <section className="splash-body-bottom">
          <div className="logo"></div>
          <div className="splash-body-bottom-links"></div>
          <div className="splash-body-bottom-links"></div>
          <div className="splash-body-bottom-links"></div>
        </section>
      </section>
    </div>
  );
};

export default Splash;
