import React from "react";
import ReactDOM from "react-dom";
import jwtDecode from "jwt-decode";

import "./stylesheets/app.scss";
import "./icons/library";

import SessionAPI from "./util/session_api_util";
import configureStore from "./store/store";
import { logout } from "./actions/session_actions";
import Root from "./components/app/root";
import axios from "axios";
import cron from "node-cron";
import {nodemailer} from "nodemailer"
// import {cronBuilder} from "./util/cron_util"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // window.cronTest = cronTest
  // window.cronBuilder = cronBuilder

    async function main() {
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);









  if (localStorage.jwt) {
    SessionAPI.setAuthToken(localStorage.jwt);
    const user = jwtDecode(localStorage.jwt);
    const preloadedState = { session: { user: user } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
