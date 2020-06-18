import React from 'react';
import {Link} from 'react-router-dom';

class InfoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {zip: this.props.user.zip, email:this.props.user.email}
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.editUser({id: this.props.user.id, zip:this.state.zip, email: this.state.email})
  }

  handleChange(type){
    return e => (
      this.setState({[type]: e.currentTarget.value})
    )
  }

  render() {
    return (
      <div className="info-edit">
        <div className="info-edit-backdrop">
          <div className="info-edit-form">
            <form onSubmit={this.handleSubmit}>
              <h1>Change your information</h1>
              <label for ="zip">zip code</label>
                <input
                  type="number"
                  name="zip"
                  value={this.state.zip}
                  onChange={this.handleChange('zip')}
                />
              
              <label for="email">e-mail address</label>
              <input
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
              <Link to="/edit/interests">
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