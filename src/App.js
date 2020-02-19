import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import QuienesSomos from './containers/QuienesSomos/QuienesSomos';
import Talleres from './containers/Talleres/Talleres';

function App() {
  return (
    <div className='app-main'>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/talleres' component={Talleres} />
        <Route path='/contacto' component={Contact} />
        <Route path='/quienes-somos' component={QuienesSomos} />
      </Switch>
    </div>
  );
}

export default App;
