import "./App.css";
import Home from "./component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./component/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experience">
            <Search />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
