import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to={"/register"}>register</NavLink>
      <NavLink to={"/login"}>login</NavLink>
    </>
  );
};

export default AuthNav;
