import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';

import HomePage from './Pages/homepage/Homepage';
import ShopPage from './Pages/shop/shop';
import Header from './components/header/header-comp';

function App() {
  console.log(' I m in app');
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path ='/' component ={HomePage} />
      <Route exact path ='/hats' component ={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;