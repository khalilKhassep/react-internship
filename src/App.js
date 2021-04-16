import React from 'react';
import { BrowserRouter, Route,Switch} from 'react-router-dom';

import './App.css';
import Header from './components/partial/header/Header';
import Main from './components/Main';
import Login from './components/Login/Login';
import Covid from './components/covid/Covid19';
import ProductMain from './components/product/ProductMain';
function App() {

  return (
    <>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Main />
        </Route>
        <Route path={'/login'}>
          <Login/>
        </Route>
        <Route path={'/covid'}>
          <Covid/>
        </Route>
        <Route  path={'/product'}>
          <ProductMain />
        </Route>
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
