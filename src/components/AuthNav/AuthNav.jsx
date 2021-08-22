import { Nav } from "./AuthNav.styled";
import { AuthLink } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Nav>
      <AuthLink to={"/register"}>Sign up</AuthLink>
      <AuthLink to={"/login"}>Log in</AuthLink>
    </Nav>
  );
};

export default AuthNav;
