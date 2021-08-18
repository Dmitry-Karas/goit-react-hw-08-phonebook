import { NavLink } from "react-router-dom";

const SiteNav = () => {
  return (
    <>
      <NavLink to={"/home"}>home</NavLink>
      <NavLink to={"/contacts"}>contacts</NavLink>
    </>
  );
};

export default SiteNav;
