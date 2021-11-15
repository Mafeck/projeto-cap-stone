import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import RegisterClient from "../pages/RegisterClient"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registerClient">
        <RegisterClient/>
      </Route>
    </Switch>
  );
};

export default Router;
