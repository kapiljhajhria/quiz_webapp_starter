import React from 'react';
import './App.css';
import Quiz from "./Quiz";
import Result from "./Result";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route exact path="/quiz_webapp_starter/result" component={Result}/>
                        <Route path="/quiz_webapp_starter">
                            <Quiz/>
                        </Route>
                        <Route path="/">
                            <Quiz/>
                        </Route>

                    </Switch>
                </Router>

            </header>
        </div>

    );
}

export default App;
