import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import Curriculo from './pages/Curriculo';
import RedirectPage from './pages/RedirectPage';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/Curriculo" component={Curriculo} />
            <Route exact path="/RedirectPage" component={RedirectPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
