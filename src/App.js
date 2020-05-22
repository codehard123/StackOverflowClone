import React from "react";
import AskQuestion from "./Components/ask-question";
import "./App.css";
import Navbar from "./Components/Navbar";
import Question from "./Components/question";

import SearchBox from "./Components/SearchBox";
import RandomQuote from "./Components/RandomQuote";
import Categories from "./Components/Categories";
import Tags from "./Components/tags";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AskQuestion />

        <Question />
      </main>
      <main>
        <SearchBox />
        <RandomQuote />
        <Categories />
        <Tags />
      </main>
    </div>
  );
}

export default App;
