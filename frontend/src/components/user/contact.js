import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionAPI from "../../util/session_api_util";
import { toggleContact } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const ContactEdit = () => {
  const dispatch = useDispatch();

  const [emailSuccess, setEmailSuccess] = useState(false);
  const user = useSelector((store) => store.session.user);

  const sendEmail = () =>
    SessionAPI.emailNow().then((res) => {
      if (res.data.email) {
        setEmailSuccess(true);
        setTimeout(() => setEmailSuccess(false), 5000);
      }
    });

  const handleToggle = () => dispatch(toggleContact());

  return (
    <div className="info-edit">
      <div className="info-edit-backdrop">
        <div className="info-edit-form">
          <h1>Schedule an Email Reminder</h1>
          {emailSuccess && (
            <div>
              <h3>Email sent!</h3>
            </div>
          )}
          <div className="contactButtonParent">
            <button id="SendEmail" onClick={sendEmail}>
              Send Now
            </button>
            <button id="SetReminder" onClick={handleToggle}>
              {user.contact ? "Stop my reminders" : "Remind me every week"}
            </button>
          </div>

          <div className="info-links">
            <Link to="/edit">Return to user edit</Link>
            <Link
              to={`/search?address=${
                user.address
              }&levels=all&issues=${user.interests.join("%20")}`}
            >
              Return to search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEdit;
