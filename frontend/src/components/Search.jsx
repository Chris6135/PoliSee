import React from 'react';
import PoliticianPreview from './PoliticianPreview.jsx';
import {Link} from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      govLevels: [],
    }
  }

  render(){
    // get unordered lists of local, county, district, state, fereral here?
    // something like...
    const officialsList = this.state.govLevels.map((govLevel) => (
      <div className="gov-level">
        <div className="gov-level-divider">
          {govLevel}
        </div>
        <ul className="gov-level-officials-list">
          {this.props.politicians[govLevel].map((politician, idx) => {
            <li className="official-preview" key={idx}><Link to={`/politicians/${politician.id}`}><PoliticianPreview politician={politician} /></Link></li>
          })}
        </ul>
      </div>
    ));

    return(
      <div className="search-page">
        <div className="search-page-sidebar">
          <div className="search-page-sidebar-head">

          </div>
          <div className="search-page-sidebar-district-info">
            <div className="search-page-sidebar-leaning">

            </div>
            <div className="search-page-sidebar-election">

            </div>
          </div>
          <div className="search-page-sidebar-interests">

          </div>
          <div className="search-page-sidebar-scope">

          </div>
        </div>
        <div className="search-page-main">
          <div className = "officials-list">
            {officialsList}
          </div>
        </div>

      </div>
    )
  }
}