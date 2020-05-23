import React from "react";

function Categories() {
  return (
    <div className="qa-widget-side qa-widget-side-low">
      <h2>Categories</h2>
      <ul className="qa-nav-cat-list qa-nav-cat-list-1">
        <li className="qa-nav-cat-item qa-nav-cat-all">
          <a href="./" className="qa-nav-cat-link qa-nav-cat-selected">
            All categories
          </a>
        </li>
        <li className="qa-nav-cat-item qa-nav-cat-core">
          <a
            href="./core"
            className="qa-nav-cat-link"
            title="Questions about the Question2Answer platform."
          >
            Q2A Core
          </a>
          <span className="qa-nav-cat-note">(10.5k)</span>
        </li>
        <li className="qa-nav-cat-item qa-nav-cat-plugins">
          <a
            href="./plugins"
            class="qa-nav-cat-link"
            title="Questions about plugins created for Q2A."
          >
            Plugins
          </a>
          <span className="qa-nav-cat-note">(3.1k)</span>
        </li>
        <li className="qa-nav-cat-item qa-nav-cat-themes">
          <a
            href="./themes"
            className="qa-nav-cat-link"
            title="Questions about third-party themes."
          >
            Themes
          </a>
          <span className="qa-nav-cat-note">(732)</span>
        </li>
      </ul>
      <div className="qa-nav-cat-clear"></div>
    </div>
  );
}

export default Categories;
