import React from "react";
import "./navbar.css";
import "./SearchBox.css";
function SearchBox() {
  return (
    <div className="qam-search turquoise ">
      <div className="qa-search">
        <form method="get" action="./search">
          <input
            type="text"
            placeholder="Search..."
            name="q"
            value=""
            class="qa-search-field"
          />
          <input type="submit" value="Search" class="qa-search-button" />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
