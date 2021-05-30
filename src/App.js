import { createContext, useState } from "react";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Search from "./component/Search/Search";
import SearchResult from "./component/searchResult/SearchResult";
import Details from "./component/Details/Details";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <PrivateRoute path="/book">
            <Search />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
