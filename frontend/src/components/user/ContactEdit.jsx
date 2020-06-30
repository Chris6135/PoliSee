import React from 'react';
import {Link} from 'react-router-dom';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
  }





  render(){

    let reminderButton;

    if(false){
     reminderButton = <button id="SetReminder">Stop my reminders</button>

    }else{
      reminderButton = <button id="SetReminder">Remind me every week</button>


    }

    return(
      <div className="info-edit">
      <div className="info-edit-backdrop">
        <div className="info-edit-form">
            <h1>Schedule an Email Reminder</h1>

            <div className="contactButtonParent">
              <button id="SendEmail">Send Now</button>
              {reminderButton}

            </div>
           
            
       
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

export default ContactEdit;