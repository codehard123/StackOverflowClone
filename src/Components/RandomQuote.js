import React from "react";

function RandomQuote() {
  return (
    <div className="qa-sidebar wet-asphalt">
      <div style={{ fontSize: "13px" }}>
        <p>
          Welcome to the Q&amp;A site for <a href="/">Question2Answer</a>.
        </p>
        <p>
          If you have a question about Q2A, please{" "}
          <a href="/qa/ask">ask in English</a>.
        </p>
        <p>
          To report a bug, please create a{" "}
          <a href="https://github.com/q2a/question2answer/issues">
            new issue on Github
          </a>{" "}
          or ask a question here with the{" "}
          <a
            href="/qa/tag/bug"
            className="qa-tag-link"
            style={{ margin: "0px 2px" }}
          >
            bug
          </a>{" "}
          tag.
        </p>
        <p>If you just have any doubt, please ask here</p>
        <p></p>
      </div>
    </div>
  );
}

export default RandomQuote;
