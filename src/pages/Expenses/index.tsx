import Header from '../../components/Header'
import {Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import FloatingBtn from '../../components/floatingBtn'
import Table from '../../components/table/expenses'
const Expenses = ()=>{
    const history = useHistory()
    return (
        <Grid container>
        <Grid item xs={12}>
        <Header title="Expenses"/>
        </Grid>
        <Grid item xs={12}>
            <Table />
        </Grid>
        <Grid item xs={12}>
        <Button onClick={()=>history.push('/expenses/add')}> Add Expenses </Button>
        </Grid>
       
        <FloatingBtn />
       
    </Grid>
    )
}

export default Expenses