import Header from '../../components/Header'
import {Grid, Button} from '@material-ui/core'
import FloatingBtn from '../../components/floatingBtn'
import Table from '../../components/table/income'
import {useHistory} from 'react-router-dom'
const Income = ()=>{
    const history = useHistory()
    return  <Grid container>
    <Grid item xs={12}>
    <Header title="Income"/>
    </Grid>
    <Grid item xs={12}>
        <Table />
    </Grid>
    <Grid item xs={12}>
    <Button onClick={()=>history.push('/income/add')}> Add Income </Button>
    </Grid>
    <FloatingBtn />
</Grid>
}

export default Income
