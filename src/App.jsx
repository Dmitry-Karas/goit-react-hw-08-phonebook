import { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";

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
  return (
    <>
      <AppBar />

      <Suspense fallback="Loading...">
        <Switch>
          <Route path={"/"} exact>
            <HomePage />
          </Route>

          <Route path={"/contacts"}>
            <ContactsPage />
          </Route>

          <Route path={"/register"}>
            <RegisterPage />
          </Route>

          <Route path={"/login"}>
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
