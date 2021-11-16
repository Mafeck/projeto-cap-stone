import { Route, Switch } from "react-router-dom";
import Clients from "../pages/Clients";
import Client from "../pages/Client";
import Login from "../pages/login";
import Register from "../pages/register";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/people">
        <Clients />
      </Route>
      <Route exact path="/people/:id">
        <Client />
      </Route>
    </Switch>
  );
};

export default Router;
