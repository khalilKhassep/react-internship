import {useState,useEffect} from 'react';
import {getRequest} from '../Modules';

//MuiComponenets
import {Container} from '@material-ui/core';
//App components
import ListSetting from '../components/ListSetting';
const Settings = () => {
    const [data,setData] = useState({});
    useEffect(()=>{
      getRequest('https://api.covid19api.com/').then(resolved => {setData(resolved)})
       
    },[])
     return (
         <Container>
            <h1>Covid 19 tracker</h1>
            {Object.keys(data).map(key => { return <ListSetting key={key} title={data[key].Name} description={data[key].Description} path={data[key].Path}></ListSetting>}) }
         </Container>
     )
}

export default Settings;