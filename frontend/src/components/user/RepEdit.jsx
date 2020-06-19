import React from 'react';
import { Link } from 'react-router-dom';

class RepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserRepresentatives()
  }

  handleClick(e){
    e.preventDefault();
    this.props.toggleRepresentative(e.currentTarget.getAttribute("value"), { "save": true })
  }

  render() {
    let officialsToMap = []; 

    for(let i=0; i< this.props.user.savedPoliticians.length; i++){
      if (this.props.officials[this.props.user.savedPoliticians[i]] !== undefined){
        officialsToMap.push(this.props.officials[this.props.user.savedPoliticians[i]])
      }
    }
    if (officialsToMap.length === 0){
      return null;
    }else{

      return (
        <div className="rep-edit">
          <div className="rep-edit-backdrop">
            <div className="rep-edit-reps">
              <h1>
                  Edit your followed representatives
              </h1>
              <ul className="rep-edit-rep-list">
                {officialsToMap.map((rep, idx) => {
                  return (

                    <li key={idx} value={rep._id} onClick={this.handleClick}>
                      <header>
                        <h2>{rep.name}</h2>
                        <h3>{rep.office}</h3>
                      </header>
                      <img src={rep.photoUrl} alt="" />
                      <footer>
                        <h2>{rep.phone || ""}</h2>

                        {/* <h3>{`Contact ${official.name}`}</h3> */}
                      </footer>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default RepEdit;