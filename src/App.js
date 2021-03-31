import React , {useState,useEffect } from 'react';


import './App.css';
import Login from './components/Login/Login';

function App() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    setUser({
      name:"khalil"
    })
  },[])
  
  return (
    <div className={'container'}>
         <Login user={user}></Login>
    </div>
  );
}

export default App;
