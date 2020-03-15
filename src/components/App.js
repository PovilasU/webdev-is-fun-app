import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Gallery from "./Gallery.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
