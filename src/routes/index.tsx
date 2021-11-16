import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login"></Route>
      <Route path="/register"></Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/dashboard/register"></Route>
      <Route path="/dashboard/people"></Route>
      <Route path="/dashboard/people/:id"></Route>
    </Switch>
  );
};

export default Router;
