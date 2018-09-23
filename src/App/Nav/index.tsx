import classnames from "classnames";
import * as React from "react";
import Fox from "../../assets/Fox.gif";

const Nav: React.SFC = () => {
  const classes = classnames(
    "bb",
    "pa3",
    "flex",
    "flex-column-reverse",
    "items-center",
    "flex-row-ns"
  );
  return (
    <nav className={classes}>
      <img className={"w2 w3-ns"} src={Fox} />
    </nav>
  );
};

export default Nav;
