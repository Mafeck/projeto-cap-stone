import { Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login"></Route>
      <Route path="/register"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/dashboard/people"></Route>
      <Route path="/dashboard/people/:id"></Route>
    </Switch>
  );
};

export default Router;
