import ExpensesAdd from '../../../components/ExpensesForm'
import {Grid} from '@material-ui/core'
import Header from '../../../components/Header'
import FloatingBtn from '../../../components/floatingBtn'
const addExpenses = ()=>{
    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <Header title="Add Expenses" />
        </Grid>
        <Grid item xs={12}>
        <ExpensesAdd />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <FloatingBtn />
    </Grid>
}
export default addExpenses