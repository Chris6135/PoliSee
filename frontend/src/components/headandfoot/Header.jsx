import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchQuery: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    const formatAddress = (string) =>
      string
        .trim()
        .split("")
        .filter((c) => c !== "," || c !== ".")
        .join("")
        .split(" ")
        .join("%20");
    const search = formatAddress(this.state.searchQuery);
    this.props.fetchRepresentatives(search).then(this.props.history.push(`/search?address=${search}&levels=all&issues=all`))
  }

  handleChange(e){
    e.preventDefault();
    this.setState({searchQuery: e.currentTarget.value})
  }

  render(){
    return (
      <div className="header">
        <div className="header-left">
          <div className="logo">
            Logo
          </div>
          <div className="information-btn">
            <span>?</span>
          </div>
        </div>
        <div className="header-skinny-middle">

        </div>
        <div className="header-right">
          <form className="header-search-bar" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchQuery}
              onChange={this.handleChange}
              placeholder="Find Your Representatives"
            />
          </form>
          <Link to="/login" className="login-link">SIGN IN</Link>
        </div>
      </div>
    )
  }


}

export default Header;