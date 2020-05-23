import React from "react";
import Navbar from "./Navbar";

import RandomQuote from "./RandomQuote";
import Categories from "./Categories";
import Tags from "./tags";
import Stats from "./Stats";
import LoginForm from "./LoginForm";
import AskQuestion from "./ask-question";
import RecentQuestions from "./RecentQuestions";
import SearchBox from "./SearchBox";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="qa-body-wrapper">
        <div className="qa-main-wrapper">
          <div class="qa-main">
            <AskQuestion />
            <RecentQuestions />
            <LoginForm />
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

export default LoginPage;
