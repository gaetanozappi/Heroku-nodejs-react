import React, {Component} from 'react';
import '../css/App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from '../components/Home';
import About from '../components/About';
import News from '../components/News';
import Navbar from '../components/CustomNavbar';

export default class App extends Component {
  render() {
    return (<Router>
      <div>
        <Navbar/>
        <Route render={({location}) => (<TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact="exact" path="/" component={Home}/>
                <Route exact="exact" path="/about" component={About}/>
                <Route exact="exact" path="/news" component={News}/>
                <Route component={Home}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>)}/>
      </div>
    </Router>);
  }
}
