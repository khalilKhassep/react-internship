import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => {
  return {
    root:"",
    center:{
      textAlign:"center",
    }
  }
})
const AppCard = ({title, path}) => {

  const classes = useStyles ;
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" componenet="h4" color="textSecondary">{title}</Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.center} to={path}>Go to app</Link>
      </CardActions>
    </Card>
  )
}

export default AppCard