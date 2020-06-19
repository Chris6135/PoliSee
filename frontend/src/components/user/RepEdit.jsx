import React from 'react';
import { Link } from 'react-router-dom';
import e from 'express';

class RepEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchRepresentatives(this.props.user.id)
  }

  repClick(){
    e.preventDefault()
    this.props.toggleRepresentative(e.currentTarget.value, )
  }

  render() {
    return (
      <div className="rep-edit">
        <div className="rep-edit-backdrop">
          <div className="rep-edit-reps">
            <h1>
              Edit your followed representatives
            </h1>
            <ul>
              {this.props.representatives.map((rep,idx) => {
                return (
                  <li key={idx} value={rep.id}>
                    
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

export default RepEdit;