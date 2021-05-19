import {Grid} from '@material-ui/core'
import useStyles from './styles'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'January',
      income: 4000,
      expenses: 2400,
      amt: 2400,
    },
    {
      name: 'Febuary',
      income: 3000,
      expenses: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      income: 2000,
      expenses: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      income: 2780,
      expenses: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      income: 1890,
      expenses: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      income: 2390,
      expenses: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      income: 3490,
      expenses: 4300,
      amt: 2100,
    },
  ];

const Chart = ()=>{
    const classes = useStyles()
    return <Grid container className={classes.root}>
        <Grid item xs={12}>Chart</Grid>
        <Grid item xs={12} style={{height:'300px'}}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="name" />
         {/*  <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#8884d8" />
          <Bar dataKey="expenses" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
        </Grid>
    </Grid>
}

export default Chart
