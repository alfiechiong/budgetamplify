import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    boxContainer: {
      width:'auto',
      border:"solid thin #999",
      borderRadius:"10px",
      backgroundColor:"#1050B7",
      padding:theme.spacing(4),
      margin:theme.spacing(2),
      color:"#FFFFFF"
    },
    head:{
        borderBottom:'Solid thin #FFFFFF',
        fontSize:'14px',
        marginBottom:theme.spacing(2)
    },
    currency:{
        fontSize:'30px'
    },
    amount:{
        fontSize:'30px',
        textAlign:'right'
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default useStyles
