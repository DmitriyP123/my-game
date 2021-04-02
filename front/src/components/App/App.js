import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Registration from "../Registration/Registration";
import Main from "../Main/Main";
import Login from "../Login/Login";
import { useSelector } from "react-redux";

import Table from "../Table/Table";

function App() {
  const Authorized = useSelector((state) => state)
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              {Authorized.logged ? <Redirect to="/game" />: <Main />}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/info">{/* <Info /> */}</Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/game">
              <Table />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
