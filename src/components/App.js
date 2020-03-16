import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
// import ProTip from "./ProTip";

import NavigationBar from "./NavigationBar.js";
import Home from "./Home.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Projects from "./Projects.js";
import Reactstrap from "./Reactstrap.js";
import Material from "./Material.js";

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
            <Route path="/material" component={Material} />
          </Switch>

          <Copyright />
        </div>
      </Router>
    );
  }
}

export default App;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://master.d31thuoylxlers.amplifyapp.com/"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
