import {useState, useEffect} from 'react'
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import useStyles from './styles'
import {createExpenses} from '../../graphql/mutations'
import addExpenses from '../../pages/Expenses/Add';
import Amplify, { API, graphqlOperation, Auth,  } from 'aws-amplify'

const ExpenseForm = () => {
  const {control, handleSubmit } = useForm();
  const onSubmit = async (data:any) => {
   
    // setExpenses(data)
    // const updatedData = {...data, userId:Auth. }

    
    try{
    await API.graphql(graphqlOperation(createExpenses,{input:data}))
    console.log("the date",data)
    }catch(e){
      console.log(e)
    }
  };
  const classes = useStyles()
  const [expenses, setExpenses] = useState<any>()
  const [dateNow, setDateNow] = useState<string>();


  useEffect(()=>{
    const now = new Date()
    setDateNow(now.toString())
  })

  const addExpenses = async () =>{
    await API.graphql(graphqlOperation(createExpenses,{input:expenses}))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={3} className={classes.root}justify = "center" alignItems="center"  direction="column">
    <Grid item xs={12}>
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
      
      <Grid item xs={12}>
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

export default ExpenseForm
