import { createContext, useState } from "react";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const UserContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
