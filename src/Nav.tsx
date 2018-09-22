import * as React from "react";
import Fox from "./assets/Fox.gif";

const Nav: React.SFC = () => (
  <nav className={"pa3 bb"}>
    <img className={"w2 w3-ns"} src={Fox} />
  </nav>
);

export default Nav;
