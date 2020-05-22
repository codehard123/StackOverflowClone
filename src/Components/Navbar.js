import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div id="qam-topbar" className="clearfix">
      <div className="qam-main-nav-wrapper clearfix">
        <div className="sb-toggle-left qam-menu-toggle">
          <i className="icon-th-list"></i>
        </div>
        <div className="qam-account-items-wrapper">
          <div id="qam-account-toggle" className="qam-logged-out">
            <i className="icon-key qam-auth-key"></i>
            <div className="qam-account-handle">Login</div>
          </div>
          <div className="qam-account-items clearfix">
            <form action="./login?to=" method="post">
              <input
                type="text"
                name="emailhandle"
                dir="auto"
                placeholder="Email or Username"
              />
              <input
                type="password"
                name="password"
                dir="auto"
                placeholder="Password"
              />
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="qam-rememberme"
                  value="1"
                />
                <label for="qam-rememberme">Remember</label>
              </div>
              <input
                type="hidden"
                name="code"
                value="0-1589490154-451c4694a118bef64a65264af6c4a7b2278e51e7"
              />
              <input
                type="submit"
                value="Login"
                className="qa-form-tall-button qa-form-tall-button-login"
                name="dologin"
              />
            </form>
            <div className="qa-nav-user">
              <ul className="qa-nav-user-list">
                <li className="qa-nav-user-item qa-nav-user-facebook-login">
                  <span className="qa-nav-user-nolink">
                    {" "}
                    <span id="fb-root" style={{ display: "inline" }}></span>
                    <span
                      className="fb-login-button"
                      style={{ display: "inline", verticalAlign: "middle" }}
                      size="medium"
                      scope="email,user_about_me,user_location,user_website"
                    ></span>
                  </span>
                </li>
                <li className="qa-nav-user-item qa-nav-user-register">
                  <a href="./register?to=" className="qa-nav-user-link">
                    Register
                  </a>
                </li>
              </ul>
              <div className="qa-nav-user-clear"></div>
            </div>
          </div>
        </div>
        <div className="qa-logo">
          <a href="./" className="qa-logo-link" title="Question2Answer Q&amp;A">
            <img
              src="./../images/question2answer-qa-logo-white-454x40.png"
              width="454"
              height="40"
              alt="Question2Answer Q&amp;A"
            />
          </a>
        </div>
        <div className="qa-nav-main">
          <ul className="qa-nav-main-list">
            <li className="qa-nav-main-item qa-nav-main-activity">
              <a href="./activity" className="qa-nav-main-link">
                All Activity
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-questions">
              <a href="./questions" className="qa-nav-main-link">
                Questions
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-hot">
              <a href="./hot" className="qa-nav-main-link">
                Hot!
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-unanswered">
              <a href="./unanswered" className="qa-nav-main-link">
                Unanswered
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-tag">
              <a href="./tags" className="qa-nav-main-link">
                Tags
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-user">
              <a href="./users" className="qa-nav-main-link">
                Users
              </a>
            </li>
            <li className="qa-nav-main-item qa-nav-main-ask">
              <a href="./ask" className="qa-nav-main-link">
                Ask a Question
              </a>
            </li>
            <li className="qa-nav-main-item-opp qa-nav-main-custom-1">
              <a href="./../" className="qa-nav-main-link">
                About
              </a>
            </li>
          </ul>
          <div className="qa-nav-main-clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
