import React from "react"
import {Link} from "react-router-dom"
import SearchBar from "./search/search_bar"

const Splash = () => (
  <div className="splash">
    <section className="splash-top">
      <section className="splash-header">
        
        <div className="splash-header-left">
          <div className="splash-header-logo">

          </div>
          <div className="splash-header-left-dropdown">

          </div>
        </div>

        <div className="splash-header-right">
          <div className="splash-header-search-bar">

          </div>
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
            
        </div>
        <div className="splash-body-one-two">
          <div className="splash-body-one-two-title-container">
              <div className="splash-body-one-two-title-bold">
                get your voice

              </div>
              <div className="splash-body-one-two-title-thin">
                to the

              </div>
              <div className="splash-body-one-two-title-bold">
                right people

              </div>

          </div>


          <div className="splash-body-one-two-body-container">
                <div className="splash-body-one-two-body">
                  PoliSee makes it easy to see representatives for your area that can affect your issues

                </div>
                <div className="splash-body-one-two-body">
                  We can tell you who is in charge of making the changes that matter most to you.

                </div>

          </div>

        </div>
        <div className="splash-body-one-three">

        </div>
      </section>

      <section className="splash-body-two">
        <div className="splash-body-politician-show">

        </div>
        <div className="splash-body-politician-show-explanation">

        </div>
      </section>

      <section className="splash-source-information">
        <div className="open-source-header">

        </div>
        <div className="github-repo-info">

        </div>
        <div className="api-boxes">
          <div className="api-box">

          </div>
          <div className="api-box">

          </div>
          <div className="api-box">

          </div>
        </div>
      </section>

      <section className="splash-body-bottom">
        <div className="logo">

        </div>
        <div className="splash-body-bottom-links">

        </div>
        <div className="splash-body-bottom-links">

        </div>
        <div className="splash-body-bottom-links">

        </div>
      </section>
    </section>
  </div>
)

export default Splash;