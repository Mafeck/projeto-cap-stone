import { Route, Switch } from "react-router-dom";
import Clients from "../pages/clients";
import Login from "../pages/login";
import Register from "../pages/register";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Clients />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Router;
