import React from "react";

function LoginForm() {
  return (
    <div>
      <div className="qa-part-form">
        <form method="post" action="./login">
          <table className="qa-form-tall-table">
            <tbody>
              <tr>
                <td className="qa-form-tall-label">Email or Username:</td>
              </tr>
              <tr>
                <td className="qa-form-tall-data">
                  <input
                    name="emailhandle"
                    id="emailhandle"
                    dir="auto"
                    type="text"
                    value=""
                    className="qa-form-tall-text"
                  />
                </td>
              </tr>
              <tr>
                <td className="qa-form-tall-label">Password:</td>
              </tr>
              <tr>
                <td className="qa-form-tall-data">
                  <input
                    name="password"
                    id="password"
                    dir="auto"
                    type="password"
                    value=""
                    className="qa-form-tall-text"
                  />
                  <div className="qa-form-tall-note">
                    <a href="./forgot">I forgot my password</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="qa-form-tall-label">
                  <label>
                    <input
                      name="remember"
                      type="checkbox"
                      value="1"
                      className="qa-form-tall-checkbox"
                    />
                    Remember me on this computer
                  </label>
                </td>
              </tr>
              <tr>
                <td colspan="1" className="qa-form-tall-buttons">
                  <input
                    value="Log In"
                    title=""
                    type="submit"
                    className="qa-form-tall-button qa-form-tall-button-login"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input name="dologin" type="hidden" value="1" />
          <input
            name="code"
            type="hidden"
            value="0-1589490563-c78b790206fac93db991e1b3e27fa809daf4e419"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
