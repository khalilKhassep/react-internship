import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppCard from './components/general/AppCard';
import Header from './components/partial/Header';


import './App.css';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      name: "khalil"
    })
  }, [])

  return (
    <BrowserRouter>
      <Header></Header>
      <Container>
      
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
            <AppCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <AppCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <AppCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <AppCard />
            </Grid>
 
            <Grid item xs={12} sm={6} lg={4}>
            <AppCard />
            </Grid>
           </Grid>  
        
 
      </Container>

    </BrowserRouter>
  );
}

export default App;
