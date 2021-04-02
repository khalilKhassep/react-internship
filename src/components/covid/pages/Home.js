import {useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {getRequest , Coutries ,convertArrayToArrOfObject} from '../Modules';
import MediaCard from '../components/MediaCard'

  const Home = ({url}) => {

    const [countries ,setCountries] = useState([]);

     useEffect(()=> {
         setCountries(convertArrayToArrOfObject(Coutries))
     },[]);

    
    return (
        <Grid container spacing={2}>
            {countries.map((_item) => {
                return (<Grid item >
                    <MediaCard country={_item.country} code={_item.code}></MediaCard>
                 </Grid>)
             })}
        </Grid>
    ) 
 
}

export default Home; 