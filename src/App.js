import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import DetailContainer from "./containers/DetailContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/:id" exact component={DetailContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
