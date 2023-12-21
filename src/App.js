import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddTodo from "./AddTodo";
import Login from "./Login";
import Welcome from "./Welcome";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/add'>
            <AddTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
