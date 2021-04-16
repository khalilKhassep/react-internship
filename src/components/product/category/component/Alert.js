import MuiAlert from '@material-ui/lab/Alert';
const Alert = ({message,severity,onClose}) => {
 return(
   <MuiAlert severity={severity} onClose={() => onClose}>
     {message}
   </MuiAlert>
 )
}

export default Alert;