import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../icons/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formatAddress = (string) =>
      string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");
    const search = formatAddress(this.state.searchQuery);
    if (this.props.user && this.props.user.interests.length !== 0) {
      this.props.history.push(
        `/search?address=${search}&levels=all&issues=${this.props.user.interests.join(
          "%20"
        )}`
      );
    } else {
      this.props.history.push(
        `/search?address=${search}&levels=all&issues=all`
      );
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchQuery: e.currentTarget.value });
  }

  render() {
    const { user } = this.props;
    const dropdown = (path) => {
      switch (path) {
        case "/login": //when we figure out cases and content we can expand this
          return (
            <div className="header-drop-content">
              <p>Enter your info to access your account</p>
              <p>
                When signed in you can manage saved representitives and sign up
                for automatic email updates
              </p>
              <p>Accounts are created via the "Sign Up" button.</p>
            </div>
          );
        case "/register": //when we figure out cases and content we can expand this
          return (
            <div className="header-drop-content">
              <p>Enter your info to make an account!</p>
              <p>Please enter your whole adresss, including state.</p>
              <p>
                It helps us grab accurate information about your representitives
              </p>
            </div>
          );
        case "/edit": //when we figure out cases and content we can expand this
          return (
            <div className="header-drop-content">
              <p>From here you can change information on your account.</p>
              <p>
                Set up default interests, change saved representitves, and
                change your address
              </p>
              <p>Email reminder funcationality is coming soon</p>
            </div>
          );
        case "/edit/interests":
          return (
            <div className="header-drop-content">
              <p>Here you can toggle your default interests.</p>
              <p>
                Your default interests will automatically filter any serach
                results
              </p>
              <p>
                Representitives outside of your intererests can still be seen
                using the search page filter
              </p>
            </div>
          );
        case "/edit/info":
          return (
            <div className="header-drop-content">
              <p>Use this page to edit your user info.</p>
              <p>Change your Email or Home Adresss</p>
              <p>
                When you log it it will automatically send you to your home's
                search page
              </p>
            </div>
          );
        case "/edit/representatives":
          return (
            <div className="header-drop-content">
              <p>Here you can see all of your followed representitives</p>
              <p>By clicking on their photo you can jump to their info page.</p>
              <p>
                Press the little 'X' to remove the politican from your list.
              </p>
            </div>
          );
        case "/search":
          return (
            <div className="header-drop-content">
              <p>This page shows all the reps in the searched adress</p>
              <p>Click on a picture to see more info. </p>
              <p>
                Use the nav bar on the left to order by local, and federal
                representitives as well as sort by gov. level and interests
              </p>
            </div>
          );
        case "/edit/contact":
          return (
            <div className="header-drop-content">
              <p>
                From here you can email yourself information on your saved reps.
              </p>
              <p>Click send now to instantly receive an email. </p>
              <p>
                {user && user.contact
                  ? 'Or press "Stop my reminders" to cancel weekly emails'
                  : 'Or press "Remind me every week"to sign up for weekly emails'}
              </p>
            </div>
          );
        default:
          return (
            <div className="header-drop-content">
              <p>Here you can see in depth info on reps.</p>
              <p>Scroll to see phone numbers, social media, and recent news</p>
              <p>
                Federal Congress Memebers will have more detailed info on the
                right sidebar
              </p>
            </div>
          );
      }
    };

    let loggedInStuff;
    let logoRoute;
    if (this.props.user) {
      loggedInStuff = (
        <div className="header-links">
          <button onClick={() => this.props.logout()}>LOG OUT</button>
          <Link to="/edit" className="edit-link">
            EDIT
          </Link>
        </div>
      );
      if (this.props.user.interests.length !== 0) {
        logoRoute = `/search?address=${
          this.props.user.address
        }&levels=all&issues=${this.props.user.interests.join("%20")}`;
      } else {
        logoRoute = `/search?address=${this.props.user.address}&levels=all&issues=all`;
      }
    } else {
      loggedInStuff = (
        <div className="header-links">
          <Link to="/login" className="login-link">
            SIGN IN{" "}
          </Link>
          <Link to="/register" className="register-link">
            SIGN UP
          </Link>
        </div>
      );

      logoRoute = "/";
    }

    return (
      <div className="header">
        <div className="header-left">
          <div className="header-logo">
            <Link to={logoRoute}>
              <img src={logo} />
            </Link>
          </div>
          <div className="information-dropdown">
            <div className="header-drop-btn">
              <span>?</span>
            </div>
            {dropdown(this.props.history.location.pathname)}
          </div>
        </div>
        <div className="header-skinny-middle"></div>
        <div className="header-right">
          <form className="header-search-bar" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchQuery}
              onChange={this.handleChange}
              placeholder="Find Your Representatives"
            />
            <button className="header-search-icon" onClick={this.handleSubmit}>
              <FontAwesomeIcon icon="search" flip="horizontal" />
            </button>
          </form>
          {loggedInStuff}
        </div>
      </div>
    );
  }
}

export default Header;
