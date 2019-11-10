import React from 'react';
import './App.css';
import MenuExampleBasic from "./MenuExampleBasic";
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import HomePage from './HomePage'
import Density from "./Density";
import Collision from './Collision'
import {Container, Menu} from "semantic-ui-react";
import NavBar from "./NavBar";
import Construction from "./Construction"
import AboutUs from "./AboutUs";
import Hastings from "./Hastings";


function App() {
  return (
    <div className="App">
        {/*<Route exact path = '/' component = {HomePage}/>*/}
        <Route  render = { () => (
            <div>
                <NavBar/>
                    <header className="main_menu">
                    <Switch>
                        <Route exact path = '/' component = {HomePage}/>
                        <Route path = '/HomePage' component = {HomePage}/>
                        <Route exact path = '/Collision' component = {Collision}/>
                        <Route exact path = '/Density' component = {Density}/>
                        <Route exact path = '/Construction' component = {Construction}/>
                        <Route exact path = '/Hastings' component = {Hastings}/>
                        <Route exact path = '/AboutUs' component = {AboutUs}/>
                    </Switch>
                    </header>
            </div>)}
        />
    </div>
  );
}

export default App;
