import Header from '../../components/Header'
import {Grid, Button} from '@material-ui/core'
import FloatingBtn from '../../components/floatingBtn'
import useStyles from './styles'
import Accordion from '../../components/accordion'

const Settings = ()=>{
    const classes = useStyles()
    return <Grid container>
    <Grid item xs={12}>
    <Header title="Settings"/>
    </Grid>
    <Grid item xs={12}>
        
    </Grid>
    <Grid item xs={12}>
        <Accordion />
    </Grid>
    <FloatingBtn />
</Grid>
}

export default Settings
