import React from "react";
import "./navbar.css";
import "./SearchBox.css";
function SearchBox() {
  return (
    <div className="SearchBox">
      <div className="qa-body-wrapper">
        <div className="qa-main-wrapper">
          <div id="qam-sidepanel-toggle">
            <i class="icon-left-open-big"></i>
          </div>
          <div class="qa-sidepanel" id="qam-sidepanel-mobile">
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
                  <input
                    type="submit"
                    value="Search"
                    class="qa-search-button"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
