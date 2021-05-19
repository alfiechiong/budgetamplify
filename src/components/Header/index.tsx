import useStyles from './styles'
import Box from '@material-ui/core/Box'
import {Auth} from 'aws-amplify'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

interface IHeaderProps {
    title:string
}

const Header = ({title}:IHeaderProps)=>{
    const classes = useStyles()
    return <Grid container className={classes.root}>
        <Grid item xs={6}><div >{title}</div> </Grid>
        <Grid item xs={6} className={classes.rightPanel} ><Button variant="contained" onClick={async()=>await Auth.signOut()} color="primary">Sign Out </Button></Grid>
    </Grid>
 
}

export default Header
