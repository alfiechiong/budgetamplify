import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {API, graphqlOperation} from 'aws-amplify'
import {listIncomes} from '../../graphql/queries'
import { useEventCallback } from '@material-ui/core';

const columns = [
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'amount', label: 'Amount', minWidth: 30 },
  { id: 'category', label: 'Category', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 50 },
];

function createData(name:string, amount:number, category:string, date:string) {
  return { name, amount, category, date };
}

const rows = [
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('lunch', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('DineOut', 100.23, "Car", "12/21/2021"),
  createData('load', 100.23, "Car", "12/21/2021"),
  createData('groceries', 100.23, "Car", "12/21/2021"),
  createData('others', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Creditcard', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  createData('Gas', 100.23, "Car", "12/21/2021"),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [income, setIncome] = useState<any>()

  const handleChangePage = (event:any, newPage:number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getincome = async()=>{
    try {
    const myincome:any = await API.graphql(graphqlOperation(listIncomes))
    const incomeItems = myincome.data.listIncomes.items
    console.log(incomeItems)

    const tableIncome = incomeItems.map((expense:any, i:number)=>{
      return  createData(expense.name, parseFloat(expense.amount), expense.category, expense.date)
    })

    setIncome(tableIncome)
  }catch(e){
      throw new Error("Something went Wrong")
    }
  }

  useEffect(()=>{
    getincome()
  },[])

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column:any) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {income && income.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column:any) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 13, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
} 
