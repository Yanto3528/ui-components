import React from "react";
import { Link } from "react-router-dom";

import { MenuContainer, MenuItemGroup, MenuItem, MenuLogo } from "./styles";

const Menu = ({ children, ...props }) => {
  return <MenuContainer {...props}>{children}</MenuContainer>;
};

Menu.ItemGroup = ({ children, ...props }) => (
  <MenuItemGroup {...props}>{children}</MenuItemGroup>
);

Menu.Item = ({ children, to, ...props }) => (
  <MenuItem {...props}>
    <Link to={to}>{children}</Link>
  </MenuItem>
);

Menu.Logo = ({ to, ...props }) => (
  <Link to={to}>
    <MenuLogo {...props} />
  </Link>
);

Menu.Item.defaultProps = {
  to: "/",
};

Menu.Logo.defaultProps = {
  to: "/",
};

export default Menu;
