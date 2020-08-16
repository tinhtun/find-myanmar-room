import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "../layouts/Header";
import history from "../history";
import PostList from "./PostList";
import PostCreate from "./PostCreate";

const App = () => {
  return (
    <Router history={history}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route path="/" exact component={PostList} />
              <Route path="/post/new" exact component={PostCreate} />
            </Switch>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
