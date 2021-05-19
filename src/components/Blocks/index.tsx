import useStyles from './styles'
import {Grid} from '@material-ui/core'

interface blockProps{
    title:string,
    amount:string,
}

const Blocks = ({title, amount}:blockProps)=>{
    const classes = useStyles()
    return (
            <div className={classes.boxContainer}>
                <Grid container>
                    <Grid item xs={12} className={classes.head}>{title}</Grid>
                    <Grid item xs={6} className={classes.currency}>PHP</Grid>
                    <Grid item xs={6} className={classes.amount}>{amount}</Grid>
                </Grid>
            </div>
    )
}

export default Blocks
