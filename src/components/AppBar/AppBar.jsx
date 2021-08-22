import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { StylesProvider } from "@material-ui/core/styles";

import AuthNav from "components/AuthNav/AuthNav";
import SiteNav from "components/SiteNav/SiteNav";
import UserMenu from "components/UserMenu/UserMenu";

import { StyledAppBar } from "./AppBar.styled";
import { StyledToolbar } from "./AppBar.styled";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StylesProvider injectFirst>
      <StyledAppBar>
        <StyledToolbar>
          <SiteNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledToolbar>
      </StyledAppBar>
    </StylesProvider>
  );
};

export default AppBar;
