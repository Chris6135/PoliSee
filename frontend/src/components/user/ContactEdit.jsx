import React from 'react';
import {Link} from 'react-router-dom';


// const ContactEdit = () => {
//   return null;
// }

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
  }


  //use nodemailer handlebars to get some css in here eventually. 
  // buildMessage(){

  //   return( )

  // }

  buildEmail(message){

  

    return{
      email: this.props.user.email,
      message: "",
      }
  }


  render(){

    return(
      <div className="info-edit">
      <div className="info-edit-backdrop">
        <div className="info-edit-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Schedule an Email Reminder</h1>
            <label for ="address">address</label>
            
            <label for="email">e-mail address</label>
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

export default ContactEdit;