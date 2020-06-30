import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { register, login } from "../../actions/session_actions";
import { sessionErrors } from "../../reducers/selectors/selectors";

const SessionForm = ({ match, history }) => {
  const reg = match.path === "/register";

  const initialUser = reg
    ? { email: "", password: "", password2: "", address: "" }
    : { email: "", password: "" };

  const [user, setUser] = useState(initialUser);
  const [localErrors, setLocalErrors] = useState([]);
  const serverErrors = useSelector((state) => sessionErrors(state));
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(initialUser);
    setLocalErrors([]);
  }, [match.path]);

  const handleChange = (type) => (e) =>
    setUser({ ...user, [type]: e.target.value });

  const formIsValid = () => {
    const keys = Object.keys(user);
    const err = [];

    keys.forEach((key) => {
      const msg =
        key === "password2"
          ? "password confirmation is required"
          : `${key} is required`;
      if (!user[key].trim().length) err.push(msg);
    });
    if (!validateEmail(user.email)) err.push("Please enter a valid email");

    setLocalErrors(err);
    return !Boolean(err.length);
  };

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const formatAddress = (string) =>
    string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid()) {
      return (reg ? dispatch(register(user)) : dispatch(login(user)))
        .then(action => 
          {
            if (!action.user){
              console.log("Incorrect username/password combination")
            }else{
              history.push(`/search?address=${formatAddress(action.user.address)}&levels=all&issues=all`)
            }
          })
    }
  };

  const demoLogin = (e) =>{
    e.preventDefault();
    user.email="polisee.devteam@gmail.com"
    user.password="password"
    dispatch(login(user))
  }


  const formHead = reg ? "Sign Up for Free" : "Sign In";

  const emailError =
    localErrors.find((e) => e.match(/email/)) || serverErrors.email;
  const passwordError =
    localErrors.find((e) => e.match(/password [^c]/)) || serverErrors.password;
  const password2Error =
    localErrors.find((e) => e.match(/password confirmation/)) ||
    serverErrors.password2;
  const addressError = localErrors.find((e) => e.match(/address/)) || serverErrors.address;

  return (
    <form className={`session-form` + ( reg ? " reg" : "" ) } onSubmit={handleSubmit}>
      <h1>{formHead}</h1>
      {reg && <h3>AND STAY INFORMED</h3>}
      <button onClick={demoLogin}>DEMO LOGIN</button>
      <label htmlFor="email">
        <h6>EMAIL</h6>
        {emailError && <span className="err-msg">{emailError}</span>}
        <input
          type="text"
          value={user.email}
          onChange={handleChange("email")}
          id="email"
        />
      </label>
      <label htmlFor="password">
        <h6>PASSWORD</h6>
        {passwordError && <span className="err-msg">{passwordError}</span>}
        <input
          type="password"
          value={user.password}
          onChange={handleChange("password")}
          id="password"
        />
      </label>
      {reg ? (
        <div className="reg-group">
          <label htmlFor="password2">
            <h6>RE-ENTER YOUR PASSWORD</h6>
            {password2Error && (
              <span className="err-msg">{password2Error}</span>
            )}
            <input
              type="password"
              value={user.password2}
              onChange={handleChange("password2")}
              id="password2"
            />
          </label>
          <div className="reg-submit-group">
            <label htmlFor="address">
              <h6>ADDRESS</h6>
              {addressError && <span className="err-msg">{addressError}</span>}
              <input
                type="text"
                value={user.address}
                onChange={handleChange("address")}
                id="address"
              />
            </label>
            <button type="submit" disabled={ localErrors.length }>SIGN UP</button>
          </div>
        </div>
      ) : (
        <button type="submit" disabled={ localErrors.length }>SIGN IN</button>
      )}
      {reg ? (
        <p>
          ALREADY HAVE AN ACCOUNT? <Link to="/login">SIGN IN</Link>
        </p>
      ) : (
        <p>
          DON'T HAVE AN ACCOUNT? <Link to="/register">SIGN UP</Link>
        </p>
      )}
    </form>
  );
};

export default SessionForm;
