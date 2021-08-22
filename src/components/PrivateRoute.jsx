import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authSelectors } from "redux/auth";

const PrivateRoute = ({ children, redirectTo = "/login", ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
