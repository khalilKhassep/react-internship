import {useState,useEffect} from 'react';
import { Container, formatMs } from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Country from './pages/Country'

import '../../App.css';
const Covid19 = () => {
  const [baseUrl , setBaseUrl] = useState('');

  useEffect(() => {
    setBaseUrl('https://api.covid19api.com/');
  },[])
  return (
    <Container>
      <BrowserRouter>
        <ul className={'menu'}>
          <li className={'menu-item'}><Link to='/'>Home</Link></li>
          <li className={'menu-item'}><Link to='/settings' >Settings</Link></li>
        </ul>
        <Switch>
          <Route path={'/settings'}>
            <Settings></Settings>
          </Route>
          <Route path={'/country/:id'}>
             <Country></Country>
          </Route>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Covid19;