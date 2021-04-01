import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import List from "./components/List";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Details from "./components/Details";

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact>
                    <List/>
                </Route>
                <Route path="/:id(\d+)/details">
                    <Details/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
