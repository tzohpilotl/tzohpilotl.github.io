import * as React from "react";
import Wrapper from "../components/Wrapper";
import Nav from "./Nav";
import Home from "./Views/Home";

class App extends React.Component {
  public render() {
    return (
      <div className={"flex avenir flex-column"}>
        <Nav />
        <Wrapper>
          <Home />
        </Wrapper>
      </div>
    );
  }
}

export default App;
