import {useState, useEffect} from 'react'
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import useStyles from './styles'
import {createIncome} from '../../graphql/mutations'
import {API, graphqlOperation} from 'aws-amplify'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

interface Iincome {
  name:String
  category: String
  userId: String
  amount: String
  description:String
  date: String
}

const IncomeForm = () => {
  const {control, handleSubmit } = useForm();
  const history = useHistory()
  const userId = useSelector((data:any)=>data.user.sub)

  const onSubmit = async (data:Iincome) => {
    const newData = {...data, userId:userId}
    addIncome(newData)
  };
  const classes = useStyles()
  const [dateNow, setDateNow] = useState<string>();

  const addIncome = async (data:Iincome) =>{
    try{
      await API.graphql(graphqlOperation(createIncome,{input:data}))
      history.push('/income')
      }catch(e){
        console.log(e)
      }
  }

  useEffect(()=>{
    const now = new Date()
    setDateNow(now.toString())
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={3} className={classes.root}justify = "center" alignItems="center"  direction="column">
    <Grid item xs={12} >
      <Controller 
        name="name"
        control={control}
        defaultValue=""
        render={({field})=> <TextField id="standard-basic" variant="outlined" label="Name" {...field} />}
      />
      </Grid>
      <Grid item xs={12} >
      <Controller 
        name="amount"
        control={control}
        defaultValue=""
        render={({field})=> <TextField id="standard-basic" variant="outlined" label="Amount" {...field} />}
      />
      </Grid>
      <Grid item xs={12}>
      <Controller 
        name="category"
        control={control}
        defaultValue=""
        render={({field})=> <TextField id="standard-basic" variant="outlined" label="Category" {...field} />}
      />
      </Grid>
      <Grid item xs={12}>
      <Controller 
        name="date"
        control={control}
        defaultValue=""
        render={({field})=> <TextField
                          variant="outlined"
                          id="date"
                          label="Date"
                          type="date"
                          defaultValue={dateNow}
                          className={classes.textFieldDate}
                          InputLabelProps={{
                            shrink: true,
                          }} {...field} />}/>
      </Grid>
      <Grid item xs={12} >
      <Controller 
        name="description"
        control={control}
        defaultValue=""
        render={({field})=> <TextField id="standard-basic" variant="outlined" label="Description" {...field} />}
      />
      </Grid>
      <Grid item xs={12}>

      <Button variant="contained" color="primary" type="submit">Insert</Button>
      </Grid>
    </Grid>
    </form>
  );
}

export default IncomeForm
