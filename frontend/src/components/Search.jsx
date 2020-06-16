import React from 'react';
import PoliticianPreview from './PoliticianPreview';
import {Link} from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      govLevels: [],
      interests: [],
    }
  }

  // componentDidMount(){
  //   this.props.fetchPolicians();
  // }

  // componentDidUpdate(){
  //   this.props.fetchPolicians();
  // }

  //component did mount/update should ultimately have a fetchPoliticians call
  //that takes in location/interest information

  handleInterest(interest){
    return (e) => {
      let interests = [...this.state.interests] //make a separate copy
      let index = interests.indexOf(interest)
      if (index !== -1) {
        interests.splice(index, 1);
        this.setState({ interests: interests })
      } else {
        this.setState({ interests: interests.push(interest) })
      }
    }
  } 
  
  handleScope(scope){

    return (e) => {
      let govLevels = [...this.state.govLevels]
      let index = govLevels.indexOf(scope)
      if (index !== -1) {
        govLevels.splice(index, 1);
        this.setState({ govLevels: govLevels })
      } else {
        this.setState({ govLevels: govLevels.push(scope) })
      }
    }

  } 

  render(){
    // get unordered lists of local, county, district, state, fereral here?
    // something like...
    // const officialsList = this.state.govLevels.map((govLevel) => (
    //   <div className="gov-level">
    //     <div className="gov-level-divider">
    //       {govLevel}
    //     </div>
    //     <ul className="gov-level-officials-list">
    //       {this.props.politicians[govLevel].map((politician, idx) => {
    //         <li className="official-preview" key={idx}>
    //           <Link to={`/politicians/${politician.id}`}><PoliticianPreview politician={politician} /></Link>
    //         </li>
    //       })}
    //     </ul>
    //   </div>
    // ));

    return(
      <div className="search-page">
        <div className="search-page-sidebar">
          <div className="search-page-sidebar-head">
            <div className="search-page-sidebar-head-left">
              <div className="search-page-sidebar-head-left-county"></div>
              <div className="search-page-sidebar-head-left-district"></div>
            </div>
            <div className="search-page-sidebar-head-right">
              <div className="order-by"></div>

            </div>
          </div>
          <div className="search-page-sidebar-district-info">
            <div className="search-page-sidebar-leaning">

            </div>
            <div className="search-page-sidebar-election">

            </div>
          </div>
          <div className="search-page-sidebar-interests">
            <button onClick={this.handleInterest("justice")}>Justice</button>
            <button onClick={this.handleInterest("education")}>Education</button>
            <button onClick={this.handleInterest("legislature")}>Legislature</button>
          </div>
          <div className="search-page-sidebar-scope">
            <button onClick={this.handleScope("local")}>Local</button>
            <button onClick={this.handleScope("county")}>County</button>
            <button onClick={this.handleScope("district")}>District</button>
            <button onClick={this.handleScope("state")}>State</button>
            <button onClick={this.handleScope("national")}>National</button>
          </div>
        </div>
        <div className="search-page-main">
          <div className = "officials-list">
            {/* {officialsList} */}
            <div className="gov-level">
              <div className="gov-level-divider">
                Local
              </div>
              <ul className="gov-level-officials-list">
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="gov-level">
              <div className="gov-level-divider">
                State
              </div>
              <ul className="gov-level-officials-list">
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="gov-level">
              <div className="gov-level-divider">
                Federal
              </div>
              <ul className="gov-level-officials-list">
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;