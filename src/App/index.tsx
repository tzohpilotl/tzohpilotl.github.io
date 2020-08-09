import * as React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import About from "./Views/About";
import Home from "./Views/Home";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className={"flex avenir bg-white"}>
          <Redirect to="/about" />
          <Route path="/about" component={About} />
          <Route exact={true} path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
