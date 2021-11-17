import { Route, Switch } from "react-router-dom";
import Clients from "../pages/Clients";
import Client from "../pages/Client";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
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
