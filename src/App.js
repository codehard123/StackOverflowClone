import React from "react";
import LoginPage from "./Components/LoginPage";
import "./App.css";
import HomePage from "./Components/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";
import UserPage from "./Components/UsersPage";
import TagsPage from "./Components/TagsPage";
function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" exact component={LoginPage}></Route>
      <Route path="/profile" exact component={ProfilePage}></Route>
      <Route path="/user" exact component={UserPage}></Route>
      <Route path="/unanswered" exact component={HomePage}></Route>
      <Route path="/hot" exact component={HomePage}></Route>
      <Route path="/questions" exact component={HomePage}></Route>
      <Route path="/activity" exact component={LoginPage}></Route>
      <Route path="/tags" exact component={TagsPage}></Route>
    </Router>
  );
}

export default App;
