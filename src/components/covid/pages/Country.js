import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getCountryData } from '../Modules';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    setTop : {
        marginTop:25
    }
});


const Country = () => {
   
    const { id } = useParams()
    const classes = useStyles();

    useEffect(() => {
        getCountryData(id)
       
    },[])

    const [data, setData] = useState({})

     const getCountryData = async (country) => {
        const request = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country.toLowerCase()}` , {
                 "method":"GET",
                 "headers": {
                    "x-rapidapi-key": "8808733b47msh60f6061911cfac3p1f63fdjsn6b58bf883837",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
             });
             if(request.ok){ 
                 const response = await request.json();
                  setData(response.response[0])
                 
             }else{
                 return Promise.reject(request)
             }
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>continent</TableCell>
                            <TableCell align="left">country</TableCell>
                            <TableCell align="left">population</TableCell>
                            <TableCell align="left">day</TableCell>
                            <TableCell align="left">time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell align="left">{data.continent}</TableCell>
                            <TableCell align="left">{data.country}</TableCell>
                            <TableCell align="left">{data.populaion}</TableCell>
                            <TableCell align="left">{data.day}</TableCell>
                            <TableCell align="left">{data.time}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer className={`${classes.table} ${classes.setTop}`} component={Paper} mt={2}>
                <Table className={`${classes.table}`} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                          
                            <TableCell align="left">active</TableCell>
                            <TableCell align="left">critical</TableCell>
                            <TableCell align="left">new</TableCell>
                            <TableCell align="left">recovered</TableCell>
                            <TableCell align="left">total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                        <TableCell align="left">{data.cases.active}</TableCell>
                        <TableCell align="left">{data.cases.critical}</TableCell>
                        <TableCell align="left">{data.cases.new}</TableCell>
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