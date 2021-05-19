
import { useEffect, useState } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createTodo } from '../../graphql/mutations'
import { listTodos, listUsers } from '../../graphql/queries'

import {Grid, Button} from '@material-ui/core'
import Blocks from '../../components/Blocks'
import Chart from '../../components/Chart'
import useStyles from './styles'
import FloatingBtn from '../../components/floatingBtn'
import Header from '../../components/Header'
const initialState = { name: '', description: '' }

const Home = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState<any>([])
  const [users, setUsers] = useState<any>([])
  const classes = useStyles()
  const myfunction = async ()=>{
    console.log(await Auth.currentAuthenticatedUser())
    }

  useEffect(() => {
    fetchTodos()
    fetchUsers()
    myfunction()
    console.log(Auth)
  }, [])

  function setInput(key:any, value:any) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData:any = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function fetchUsers() {
    try {
      const usersData:any = await API.graphql(graphqlOperation(listUsers))
      const users = usersData.data.listUsers.items
      setUsers(users)
    } catch (err) { console.log('error fetching todos') }
  }



  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo:any = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <Grid container>
        <Grid item xs={12}>
        <Header title="Home"/>
        </Grid>
        <Grid item xs={12}><Chart /></Grid>
        <Grid item xs={12}><Blocks title="Expenses" amount="240,009.09" /></Grid>
        <Grid item xs={12}><Blocks title="Income" amount="600,009.09" /></Grid>
        <Grid item xs={12}>{
           /*  users.map((data:any)=>{
                return <li>{data.email}</li>
            }) */
        }</Grid>

          
  
        <Grid item xs={12}></Grid>
        <FloatingBtn />
    </Grid>
  )
    
}

export default Home