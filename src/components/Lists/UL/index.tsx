import classnames from "classnames";
import * as React from "react";

export interface IUL {
  horizontal?: boolean;
  responsive?: boolean;
}

const UL: React.SFC<IUL> = ({ horizontal, responsive, ...rest }) => {
  const classes = classnames({
    flex: true,
    "flex-column": !horizontal,
    "flex-row-ns": responsive,
    list: true,
    ma0: true,
    pa0: true,
  });
  return <ul className={classes} {...rest} />;
};

export default UL;
