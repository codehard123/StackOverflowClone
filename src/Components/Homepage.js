import React from "react";
import AskQuestion from "./ask-question";
import "../App.css";
import Navbar from "./Navbar";
import Question from "./question";
import RecentQuestions from "./RecentQuestions";
import SearchBox from "./SearchBox";
import RandomQuote from "./RandomQuote";
import Categories from "./Categories";
import Tags from "./tags";
import Stats from "./Stats";
function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="qa-body-wrapper">
        <div className="qa-main-wrapper">
          <div class="qa-main">
            <AskQuestion />
            <RecentQuestions />
            <Question />
          </div>
          <div id="qam-sidepanel-toggle">
            <i class="icon-left-open-big"></i>
          </div>
          <div class="qa-sidepanel" id="qam-sidepanel-mobile">
            <SearchBox />
            <RandomQuote />
            <Categories />
            <Tags />
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
