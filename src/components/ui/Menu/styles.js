import styled, { css } from "styled-components";

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItemGroup = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const MenuLogo = styled.img`
  height: 100%;
  width: 100px;
`;
