import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Outside from "./outside/outside.js";
import Inside from "./inside/inside";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Outside} />
                        <Route exact path='/inside' component={Inside} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
