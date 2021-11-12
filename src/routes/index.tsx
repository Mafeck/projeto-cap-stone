import { Route, Switch } from "react-router-dom";
import Comments from "../components/CardComments";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Comments title="Teste Título" text="test comment" />
      </Route>
      <Route exact path="/clients">
        
      </Route>
    </Switch>
  );
};

export default Router;
