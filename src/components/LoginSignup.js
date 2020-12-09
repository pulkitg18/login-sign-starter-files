import React, { useEffect } from "react";
import {
  Facebook,
  LinkedIn,
  Lock,
  Mail,
  Person,
  Twitter,
} from "@material-ui/icons";

import log from "../img/log.svg";
import register from "../img/register.svg";

const SignInSignUp = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <Person />
              <input type="text" placeholder="Username"></input>
            </div>
            <div className="input-field">
              <Lock />
              <input type="password" placeholder="Password"></input>
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <div className="social-icon">
                <Facebook />
              </div>

              <div className="social-icon">
                <Twitter />
              </div>

              <div className="social-icon">
                <LinkedIn />
              </div>

              {/* <div className="social-icon"></div> */}
            </div>{" "}
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <Mail />
              <input type="text" placeholder="Email" required></input>
            </div>
            <div className="input-field">
              <Lock />
              <input type="password" placeholder="Password" required></input>
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <div className="social-icon">
                <Facebook />
              </div>

              <div className="social-icon">
                <Twitter />
              </div>

              <div className="social-icon">
                <LinkedIn />
              </div>

              {/* <div className="social-icon"></div> */}
            </div>{" "}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
