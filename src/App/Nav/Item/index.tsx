import * as React from "react";
import { Link } from "react-router-dom";

export interface INavItem {
  name: string;
  route: string;
}

const NavElement: React.SFC<INavItem> = ({ name, route }) => (
  <li className="pa1 f4">
    <Link to={route} className="pa1 link black bg-animate hover-bg-gold">
      {name}
    </Link>
  </li>
);

export default NavElement;
