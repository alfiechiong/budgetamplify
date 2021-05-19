import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  exampleWrapper: {
    position: 'relative',
    marginBottom: theme.spacing(3),
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <HomeIcon />, name: 'Home', url:'/' },
  { icon: <MoneyOffIcon />, name: 'Expenses',  url:'/expenses'},
  { icon: <AccountBalanceWalletIcon />, name: 'Income', url:'/income' },
  { icon: <SettingsIcon />, name: 'Settings', url:'/settings' }
];

export default function SpeedDials() {
    const history = useHistory();

  const classes = useStyles();
  const [direction, setDirection] = React.useState<"up" | "left" | "right" | "down" | undefined>('up');
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event:any) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event:any) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickIcons = (action:any)=>{
    setOpen(false);
    history.push(action.url)

  }

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box style={{
        position: "fixed",
        bottom: 0,
        right: 0, 
        padding: "20px"
        
    }}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={()=>handleClickIcons(action)}
            />
          ))}
        </SpeedDial>
    </div>
    </Box>
  );
}
