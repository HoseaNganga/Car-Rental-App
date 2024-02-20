import React from "react";
import "./SignInPage.css";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const history = useNavigate();

  const handleSubmit = () => {
    const mail = document.getElementById(`signUpEmail`);
    const password = document.getElementById(`signUpPassword`);
    if (mail.value && password.value) {
      history("/");
    }
  };
  return (
    <div className="signinPageContainer">
      <div className="aboutHeader">
        <div className="aboutImgContainer">
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="signupBody">
        <div className="holdGrid">
          <form className="signForm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="signUpEmail">Email</label>
              <input
                type="email"
                id="signUpEmail"
                placeholder="user@gmail.com"
                required
                autoComplete="on"
              />
            </div>
            <div>
              <label htmlFor="signUpPassword">Password</label>
              <input
                type="text"
                id="signUpPassword"
                placeholder="password"
                required
                autoComplete="on"
              />
            </div>
            <button onClick={handleSubmit} className="signUpPageBtn signup">
              Sign in
            </button>
          </form>
          <div className="signUpFooter">
            Don't have an account ?{" "}
            <button className="signInPageBtn">
              <Link to={"/signup"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
