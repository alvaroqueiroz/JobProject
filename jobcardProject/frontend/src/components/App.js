import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Alerts from './layout/Alerts';

import Header from './layout/header';
import Cardslist from './cards/Cardslist';

import Login from './accounts/Login'
import Register from './accounts/Register'


import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from "../actions/auth";

import AddCard from './cards/AddCard';

const alertOptions = {
    timeout: 3000,
    position: "top center"
  }


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
      }

    render() {
        return (
            <Provider store = {store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                <Fragment>
                    <Header />
                    <Alerts />
                    <div className="container">
                        <Switch>
                        <Route exact path="/" component={Cardslist} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/addcard" component={AddCard} />
                        </Switch>
                    </div>
                </Fragment>
                </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));