import classnames from "classnames";
import * as React from "react";
import Fox from "../../assets/Fox.gif";
import UL from "../../components/Lists/UL";
import NavItem, { INavItem } from "./Item";

interface INav {
  items: INavItem[];
}

const Nav: React.SFC<INav> = ({ items }) => {
  const classes = classnames(
    "bb",
    "pa3",
    "flex",
    "flex-column-reverse",
    "items-center",
    "flex-row-ns"
  );
  const navItems = items.map(i => (
    <NavItem key={`${i.name}-${i.route}`} {...i} />
  ));

  return (
    <nav className={classes}>
      <img className={"w2 w3-ns pa2"} src={Fox} />
      <UL horizontal={true} responsive={true}>
        {navItems}
      </UL>
    </nav>
  );
};

export default Nav;
