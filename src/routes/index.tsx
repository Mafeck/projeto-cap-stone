import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import RegisterClient from "../pages/RegisterClient"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard/register">
        <RegisterClient/>
      </Route>
    </Switch>
  );
};

export default Router;
