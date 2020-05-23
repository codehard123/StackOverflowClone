import React from "react";

function User() {
  return (
    <div>
      <span className="qa-ranking-item qa-top-users-item">
        <span className="qa-top-users-avatar">
          <a href="./user/angelicshimmer87" className="qa-avatar-link">
            <span
              style={{ display: "inline-block", padding: "0px 0px 0px 0px" }}
            >
              <img
                src="./?qa=image&amp;qa_blobid=12697203736109131893&amp;qa_size=30"
                width="30"
                height="30"
                className="qa-avatar-image"
                alt=""
              />
            </span>
          </a>
        </span>
        <span className="qa-top-users-label">
          <a href="./user/angelicshimmer87" className="qa-user-link">
            angelicshimmer87
          </a>
        </span>
        <span className="qa-top-users-score">100</span>
      </span>
    </div>
  );
}

export default User;
