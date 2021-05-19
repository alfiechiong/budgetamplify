import IncomeAdd from '../../../components/IncomeForm'
import {Grid} from '@material-ui/core'
import Header from '../../../components/Header'
import FloatingBtn from '../../../components/floatingBtn'
const addIncome = ()=>{
    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <Header title="Add Income" />
        </Grid>
        <Grid item xs={12}>
        <IncomeAdd />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <FloatingBtn />
    </Grid>
}
export default addIncome
