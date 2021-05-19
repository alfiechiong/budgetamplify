import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean | string>(false);

  const handleChange = (panel:any) => (event:any, isExpanded:boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Profile</Typography>
          <Typography className={classes.secondaryHeading}>Set Your Profile Here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the location for profile
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Categories</Typography>
          <Typography className={classes.secondaryHeading}>
            Categories list and updates
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Categories
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Currency</Typography>
          <Typography className={classes.secondaryHeading}>
            Set And Update your Currency
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            please note that this will take effect in all currencies
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

/* 
<Grid container spacing={2}>
        <Grid item xs={12} className={classes.gridContainer}>
            <Button variant="contained"
                    color="primary"
                    className={classes.btn}
                    startIcon={<CategoryIcon />}> 
                    Category 
            </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
            <Button variant="contained"
                    className={classes.btn}
                    color="primary"
                    startIcon={<CategoryIcon />}> Currency </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridContainer}>
            <Button variant="contained"
                    className={classes.btn}
                    color="primary"
                    startIcon={<CategoryIcon />}> Status </Button>
            </Grid>
        </Grid>
*/
