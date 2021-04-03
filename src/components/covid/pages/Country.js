import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
//Mine
import { getCountryData } from '../Modules';
import { countryData } from '../DataStore';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    setTop: {
        marginTop: 25
    },
    setBottom: {
        marginBottom:30
    },
    bgBlue:{
        background:"rgb(92 195 255)"
    },
    bgGray:{
          background:"rgb(249 249 249)"
    }


});


const Country = () => {

    const { id } = useParams()
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(countryData)

    console.log('before merging => ', data);

    useEffect(() => {
        getCountryData(id).then(resolved => { setData(resolved) });
        console.log('After merging', data);
        // {...wnatedObject , objectKey : new Value}
    }, [])





    return (
        <React.Fragment>
            <TableContainer className={`${classes.setBotton} ${classes.bgBlue}`}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>continent</TableCell>
                            <TableCell align="left">country</TableCell>
                            <TableCell align="left">population</TableCell>
                            <TableCell align="left">Day</TableCell>
                            <TableCell align="left">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                            <TableRow >
                               
                                <TableCell align="left">{data.continent}</TableCell>
                                <TableCell align="left">{data.country}</TableCell>
                                <TableCell align="left">{data.population}</TableCell>
                                <TableCell align="left">{data.day}</TableCell>
                                <TableCell align="left">{data.time}</TableCell>
                            </TableRow>
                      
                    </TableBody>
                </Table>
            </TableContainer>
                 
                 <Divider></Divider>

            <TableContainer className={`${classes.setTop} ${classes.bgGray}`}>
                <Table className={`${classes.table} `} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>New</TableCell>
                            <TableCell align="left">Active</TableCell>
                            <TableCell align="left">critical</TableCell>
                            <TableCell align="left">recovered</TableCell>
                            <TableCell align="left">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">{data.cases.new}</TableCell>
                            <TableCell align="left">{data.cases.active}</TableCell>
                            <TableCell align="left">{data.cases.critical}</TableCell>
                            <TableCell align="left">{data.cases.recovered}</TableCell>
                            <TableCell align="left">{data.cases.total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )

}

export default Country;