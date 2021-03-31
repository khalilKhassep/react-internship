import {styled} from '@material-ui/core/styles';
import { spacing } from "@material-ui/system";

import MuiButton from '@material-ui/core/Button';
const theme ={
    spacing:2
}
const Button = styled(MuiButton)(spacing)

export default Button;