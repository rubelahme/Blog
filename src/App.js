import "./App.scss";
import Home from "./Components/Home/Home/Home";
import { createContext } from "react";
import { useState } from "react";
import Notpages from "./Components/NotPages/Notpages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Components/Login/PrivateRoute";
import Details from "./Components/Home/Details/Details";
export const createProvider = createContext();

function App() {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });
  return (
    <createProvider.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/Dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/singIn">
            <Home></Home>
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notpages></Notpages>
          </Route>
        </Switch>
      </Router>
    </createProvider.Provider>
  );
}

export default App;
