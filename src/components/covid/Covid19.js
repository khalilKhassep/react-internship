import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Country from './pages/Country'

import '../../App.css';

const useStyles = makeStyles({
  root:{},
  fixMargin:{
    marginTop:100
  }
})
const Covid19 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.fixMargin}>
      <BrowserRouter>
        <ul className={'menu-covid'}>
          <li className={'menu-item'}><Link to='/covid'>Home</Link></li>
          <li className={'menu-item'}><Link to='/settings' >Settings</Link></li>
        </ul>
        <Switch>
          <Route path={'/settings'}>
            <Settings></Settings>
          </Route>
          <Route path={'/country/:id'}>
             <Country></Country>
          </Route>
          <Route exact path={'/covid'}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Covid19;