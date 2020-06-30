import React from 'react';
import { Link } from 'react-router-dom';

class InterestEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { interests: this.props.user.interests }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.interests)
    let interests = [...this.state.interests];
    console.log(interests)
    if (interests.length === 0){
      this.props.editUser({ id: this.props.user.id, interests: "none" });
    }else{
      this.props.editUser({ id: this.props.user.id, interests: interests.join('%20') });
    }
    setTimeout(() => {
      if (this.props.user.interests.length !== 0) {
        this.props.history.push(`/search?address=${this.props.user.address}&levels=all&issues=${this.props.user.interests.join('%20')}`)
      } else {
        this.props.history.push(`/search?address=${this.props.user.address}&levels=all&issues=all`)
      }
    }, 200);



  }

  handleChange(type) {
    return e => {
      let typeIdx, alterableState;
      alterableState = [];

      if (this.state.interests.length !== 0) {
        typeIdx = this.state.interests.indexOf(type);
        alterableState = [...this.state.interests]
      } else {
        typeIdx = -1;
      }
      if (typeIdx !== -1) {
        alterableState.splice(typeIdx, 1)
        this.setState({ interests:  alterableState})
      }else{
        this.setState({ interests: this.state.interests.concat([type]) })
      }
    }
  }

  render() {
    let usableInterests; 
    if(this.state.interests.length !== 0){
      usableInterests = [...this.state.interests];
    }else{
      usableInterests = [];
    }

    return (
      <div className="interest-edit">
        <div className="interest-edit-backdrop">
          <div className="interest-edit-form">
            <form onSubmit={this.handleSubmit}>
              <h1>Update your interests</h1>
              <div className="interest-box" >
                <label htmlFor="education">Education</label>
                <div className="slide-box"onClick={this.handleChange("education")} >
                  <input
                    name="education"
                    type="checkbox"
                    checked={usableInterests.includes('education')}
                    onChange={this.handleChange("education")}
                  />
                  <span className="slider"/>
                </div>
              </div>
              <div className="interest-box">
                <label htmlFor="justice">Justice</label>
                <div className="slide-box"onClick={this.handleChange("justice")} >
                  <input
                    name="justice"
                    type="checkbox"
                    checked={usableInterests.includes('justice')}
                    onChange={this.handleChange("justice")}
                  />
                  <span className="slider"/>
                </div>
              </div>
              <div className="interest-box">
                <label htmlFor="legislation">Legislation</label>
                <div className="slide-box"onClick={this.handleChange("legislation")} >
                  <input
                    type="checkbox"
                    checked={usableInterests.includes('legislation')}
                    onChange={this.handleChange("legislation")}
                  />  
                  <span className="slider"/>
                </div>
              </div>            
              <button onClick={this.handleSubmit}>
                Confirm Changes
              </button>
            </form>
            <div className="info-links">
              <Link to="/edit">
                Return to user edit
              </Link>
              <Link to={`/search?address=${this.props.user.address}&levels=all&issues=${this.props.user.interests.join('%20')}`}>
                Return to search
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default InterestEdit;