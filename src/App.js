import React, { Component } from "react";
import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SuccessMsg from './Components/SuccessMsg'
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddEmployee} />
        <Route exact path="/success" component={SuccessMsg} />
      </Router>
    );
  }
}

export default App;
