import React, { Component } from 'react';
import {Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const App = () =>

<div class="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={LoginPage} />
</div>

export default App;
