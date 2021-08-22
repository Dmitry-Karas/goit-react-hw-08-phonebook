import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { authSelectors } from "redux/auth";
import { SiteNavLink } from "./SiteNav.styled";

const SiteNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const location = useLocation();

  const handleNavLinkClick = (e) => {
    const isCurrentPath = e.target.getAttribute("href") === location.pathname;

    if (isCurrentPath) e.preventDefault();
  };

  return (
    <nav>
      {isLoggedIn ? (
        <SiteNavLink to={"/contacts"} onClick={handleNavLinkClick}>
          Contacts
        </SiteNavLink>
      ) : (
        <SiteNavLink to={"/"} onClick={handleNavLinkClick}>
          Home
        </SiteNavLink>
      )}
    </nav>
  );
};

export default SiteNav;
