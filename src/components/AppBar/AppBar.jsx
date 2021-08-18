import AuthNav from "components/AuthNav/AuthNav";
import SiteNav from "components/SiteNav/SiteNav";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <SiteNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
