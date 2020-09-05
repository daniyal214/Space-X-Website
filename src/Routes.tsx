import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Launch from './component/Launch/index';
import Rockets from './component/Rockets/index';
import RocketDetails from './component/RocketDetails/index';
import LaunchDetails from './component/LaunchDetails/index';
import ShipDetails from './component/ShipDetails/index';
import Ships from './component/Ships/index';
import Home from './Home';
import AppBar from './AppBar';


function RouteFunction() {
  return (
    <div>
      <Router forceRefresh={true}>
        <AppBar />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/launch" component={Launch} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/rockets/:id" component={RocketDetails} />
          <Route exact path="/launch/:id" component={LaunchDetails} />
          <Route exact path="/ships" component={Ships} />
          <Route exact path="/ships/:id" component={ShipDetails} /> 
          <Route exact path="*" component={() => <h2>404 Not Found</h2>} />

        </Switch>
      </Router>
    </div>
  );
}

export default RouteFunction;