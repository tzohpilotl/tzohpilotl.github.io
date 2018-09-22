import * as React from "react";
import Nav from "./Nav";
import Welcome from "./Welcome";
import Wrapper from "./Wrapper";

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
