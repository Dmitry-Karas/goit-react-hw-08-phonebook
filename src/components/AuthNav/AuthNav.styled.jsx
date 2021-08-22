import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  margin-left: auto;
`;

export const AuthLink = styled(NavLink)`
  padding: 5px;

  color: #fff;
  transition: all 250ms ease;

  &:first-of-type {
    margin-right: 10px;
  }

  &.active {
    position: relative;
    color: var(--color-light);
    pointer-events: none;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: var(--color-light);
    }
  }
`;
