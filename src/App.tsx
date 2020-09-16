import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Chat from "./components/Chat/Chat";

function app() {
  return (
    <div className="app">
        <Router>
            <NavBar/>
            <div className="app__body">
                <SideBar/>
                <Switch>
                    <Route path="/rooms/:roomID">
                        <Chat/>
                    </Route>
                    <Route path="/">
                        <h1>Welcome</h1>
                    </Route>
                </Switch>
                {/*sidebar*/}
                {/*react-router -> chat screen*/}
            </div>
        </Router>
    </div>
  );
}

export default app;
