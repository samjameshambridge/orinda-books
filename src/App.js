import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "components/pages/Landing";
import Dashboard from "components/pages/Dashboard";
import Profile from "components/pages/profile/Profile";
import EditProfile from "components/pages/profile/EditProfile";
import Tasks from "components/pages/profile/Tasks";
import Events from "components/pages/profile/Events";
import Settings from "components/pages/profile/Settings";
import EditSettings from "components/pages/profile/EditSettings";
import Orders from "components/pages/admin/Orders";
import Sales from "components/pages/admin/Sales";
import Staff from "components/pages/admin/Staff";
import Search from "components/pages/admin/Search";
import Inventory from "components/pages/admin/Inventory";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/settings/edit" component={EditSettings} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/inventory" component={Inventory} />
      </Switch>
    </Router>
  );
}

export default App;
