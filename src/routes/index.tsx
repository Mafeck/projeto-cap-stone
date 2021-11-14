import { Route, Switch } from "react-router-dom";
import Clients from "../pages/Clients";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
       
      </Route>
      <Route exact path="/clients">
        <Clients />
      </Route>
    </Switch>
  );
};

export default Router;
