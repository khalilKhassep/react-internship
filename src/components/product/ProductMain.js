import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Items from './category/Items';

const useStyles = makeStyles({
  fixMargin:{
    marginTop: 100,
  }
})
const ProductMain = () => {
  const classes = useStyles();

  return (
     <>
       <Container className={classes.fixMargin}>
         <Items/>
       </Container>
     </>
  )
}

export default ProductMain;

// if there is no category show add cateogry componenet ;
// If product state category has cats list cats with Edit Upate , Delete actions ;