import React from "react";

function Tags() {
  return (
    <div className="qa-widget-side qa-widget-side-low">
      <h2 style={{ marginTop: "0", paddingTop: "0" }}>Most popular tags</h2>
      <div style={{ fontSize: "10px" }}>
        <a
          href="./tag/plugin"
          style={{ fontSize: "24px", verticalAlign: "baseline" }}
        >
          plugin
        </a>
        <a
          href="./tag/error"
          style={{ fontSize: "21px", verticalAlign: "baseline" }}
        >
          error
        </a>
      </div>
    </div>
  );
}

export default Tags;
