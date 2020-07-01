import React from "react";
import { Link } from "react-router-dom";

class RepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserRepresentatives();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(
      `/officials/${e.currentTarget.getAttribute("value")}`
    );
  }

  handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleRepresentative(e.currentTarget.getAttribute("value"));
  }

  render() {
    let officialsToMap = [];

    for (let i = 0; i < this.props.user.savedPoliticians.length; i++) {
      if (
        this.props.officials[this.props.user.savedPoliticians[i]] !== undefined
      ) {
        officialsToMap.push(
          this.props.officials[this.props.user.savedPoliticians[i]]
        );
      }
    }
    return (
      <div className="rep-edit">
        <div className="rep-edit-backdrop">
          <div className="rep-edit-reps">
            <h1>Edit your followed representatives</h1>
            <ul className="rep-edit-rep-list">
              {officialsToMap.map((rep, idx) => {
                return (
                  <li key={idx} value={rep._id} onClick={this.handleClick}>
                    <header>
                      <h2>{rep.name}</h2>
                      <h3>{rep.office}</h3>
                    </header>
                    <img src={rep.photoUrl} alt="" />
                    <button value={rep._id} onClick={this.handleToggle}>
                      <span>X</span>
                    </button>
                    <footer>
                      <h2>{rep.phone || ""}</h2>

                      {/* <h3>{`Contact ${official.name}`}</h3> */}
                    </footer>
                  </li>
                );
              })}
            </ul>
            <div className="info-links">
              <Link to="/edit">Return to user edit</Link>
              <Link
                to={`/search?address=${
                  this.props.user.address
                }&levels=all&issues=${this.props.user.interests.join("%20")}`}
              >
                Return to search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepEdit;
