import {Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home'
import Income from '../../pages/Income'
import Expenses from '../../pages/Expenses'
import Settings from '../../pages/Settings'
import AddExpeses from '../../pages/Expenses/Add'
import AddIncome from '../../pages/Income/Add'
const Router = ()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/expenses/add" component={AddExpeses} />
            <Route exact path="/income" component={Income} />
            <Route exact path="/income/add" component={AddIncome} />
            <Route exact path="/settings" component={Settings} />
        </Switch>
    )

    
}

export default Router
