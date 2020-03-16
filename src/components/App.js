import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar.js";
import Home from "./Home.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Projects from "./Projects.js";
import Reactstrap from "./Reactstrap.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/projects" component={Projects} />
            <Route path="/reactstrap" component={Reactstrap} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
