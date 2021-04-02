import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              {/* <Main /> */}
            </Route>
            <Route path="/login">
              {/* <Login /> */}
            </Route>
            <Route path="/info">
              {/* <Info /> */}
            </Route>
            <Route path="/registration">
              {/* <Registr /> */}
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
