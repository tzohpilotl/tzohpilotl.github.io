import * as React from "react";
import Wrapper from "../components/Wrapper";
import Nav from "./Nav";
import Welcome from "./Views/Welcome";

class App extends React.Component {
  public render() {
    return (
      <div className={"flex avenir flex-column"}>
        <Nav />
        <Wrapper>
          <Welcome />
        </Wrapper>
      </div>
    );
  }
}

export default App;
