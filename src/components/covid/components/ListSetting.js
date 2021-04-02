import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider 
} from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  felxCol : {
    flexDirection:'column '
  },
  blueText:{
    color : '#0014ff'
  }

}));

const ListSetting = ({ title, description, path }) => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel1a-content"}
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.felxCol}>
        <Box mb={1}>
          <Typography>{description}</Typography>
        </Box>
        <Divider></Divider>
        <Box pt={1}>
          <Typography className={classes.blueText}>{`Path : ${path}`}</Typography> 
        </Box>
        
      </AccordionDetails>
    </Accordion>
  );
};

export default ListSetting;
