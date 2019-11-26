/**
 * KYIV MEDIA 26.11.2019
 */
import ReactDom from "react-dom";
import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}
ReactDom.render(<App />, document.getElementById("app"));
