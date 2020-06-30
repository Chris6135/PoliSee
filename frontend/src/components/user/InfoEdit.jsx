import React from 'react';
import {Link} from 'react-router-dom';

class InfoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {address: this.props.user.address, email:this.props.user.email}
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.address.length > 5){
      this.props.editUser({ id: this.props.user.id, address: this.state.address, email: this.state.email })
      setTimeout(() => {
        if (this.props.user.interests.length !== 0) {
          this.props.history.push(`/search?address=${this.props.user.address}&levels=all&issues=${this.props.user.interests.join('%20')}`)
        } else {
          this.props.history.push(`/search?address=${this.props.user.address}&levels=all&issues=all`)
        }
      }, 200);
    }else{
      this.setState({address: "Please enter a full address"})
    }
  }

  handleChange(type){
    return e => (
      this.setState({[type]: e.currentTarget.value})
    )
  }

  render() {
    let demo;
    if(this.state.email === "polisee.devteam@gmail.com"){
      demo = true
    }else{
      demo = false
    }


    return (
      <div className="info-edit">
        <div className="info-edit-backdrop">
          <div className="info-edit-form">
            <form onSubmit={this.handleSubmit}>
              <h1>Change your information</h1>
              <label htmlFor ="address">address</label>
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange('address')}
                />
              
              <label htmlFor="email">e-mail address</label>
              <input
                disabled={demo}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
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

export default InfoEdit;