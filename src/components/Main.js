import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppCard from './general/AppCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {},
  fixMargin: {
    marginTop: 100
  }
})

function Main () {
  const classes = useStyles()
  return (
    <Container className={classes.fixMargin}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <AppCard title={'Login app'} path={'/login'}/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <AppCard title={'Covid tracker'} path={'/covid'}/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <AppCard title={'Category'} path={'/product'}/>
        </Grid>

      </Grid>

    </Container>
  )
}

export default Main
