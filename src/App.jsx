import { lazy, Suspense, useEffect } from "react";
import { Switch, useLocation } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import { Loader } from "components/Loader/Loader";
import { contactsSelectors } from "redux/contacts";
import { animated, useTransition } from "react-spring";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const ContactsPage = lazy(() =>
  import(
    "./pages/ContactsPage/ContactsPage" /* webpackChunkName: "ContactsPage" */
  )
);

const RegisterPage = lazy(() =>
  import(
    "./pages/RegisterPage/RegisterPage" /* webpackChunkName: "RegisterPage" */
  )
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage" /* webpackChunkName: "LoginPage" */)
);

const App = () => {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      // opacity: 0,
      transform: "translate3d(100%,0,0)",
    },
    enter: {
      // opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    leave: {
      // opacity: 0,
      transform: "translate3d(-100%,0,0)",
    },
  });

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      {isRefreshing ? (
        <Loader />
      ) : (
        transitions((props, item) => (
          <Suspense fallback={<Loader />}>
            <animated.div style={props}>
              <div style={{ position: "absolute", width: "100%" }}>
                <Switch location={item}>
                  <PublicRoute
                    path={"/"}
                    exact
                    restricted
                    redirectTo="/contacts"
                  >
                    <HomePage />
                  </PublicRoute>

                  <PublicRoute
                    path={"/register"}
                    restricted
                    redirectTo="/contacts"
                  >
                    <RegisterPage />
                  </PublicRoute>

                  <PublicRoute
                    path={"/login"}
                    restricted
                    redirectTo="/contacts"
                  >
                    <LoginPage />
                  </PublicRoute>

                  <PrivateRoute path={"/contacts"} redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                </Switch>
              </div>
            </animated.div>
            <Loader loading={isLoading} />
          </Suspense>
        ))
      )}
    </>
  );
};

export default App;
