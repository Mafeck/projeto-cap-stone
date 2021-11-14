import { Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/register"></Route>
    </Switch>
  );
};

export default Router;
