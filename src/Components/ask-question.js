import React from "react";

function AskQuestion() {
  return (
    <div className="qa-body-wrapper">
      <div className="qa-main-wrapper">
        <div className="qa-main">
          <div className="qa-widgets-main qa-widgets-main-top">
            <div className="qa-widget-main qa-widget-main-top">
              <div className="qa-ask-box">
                <form method="post" action="./ask?cat=">
                  <table
                    className="qa-form-tall-table"
                    style={{ width: "100%" }}
                  >
                    <tbody>
                      <tr style={{ verticalAlign: "middle" }}>
                        <td
                          className="qa-form-tall-label"
                          style={{
                            width: "1px",
                            padding: "8px",
                            whiteSpace: "nowrap",
                            textAlign: "right",
                          }}
                        >
                          Ask&nbsp;a&nbsp;question:
                        </td>
                        <td
                          className="qa-form-tall-data"
                          style={{ padding: "8px" }}
                        >
                          <input
                            name="title"
                            type="text"
                            className="qa-form-tall-text"
                            style={{ width: "95%" }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input type="hidden" name="doask1" value="1" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
