import {useEffect} from 'react'
import Amplify,{API, Auth, graphqlOperation} from 'aws-amplify'
import {withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import Routes from './components/Routes'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import {BrowserRouter} from 'react-router-dom'
import {listUsers} from './graphql/queries'
import { AnyARecord } from 'dns';

Amplify.configure(awsExports);

const App = () => {

    const isUserExist= async ()=>{
        const user:any = await API.graphql(graphqlOperation(listUsers))
        return user.data.listUsers.items
    }

    useEffect(()=>{
        console.log(Auth)
        console.log("USER:: ", isUserExist())
    })

    return <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes />
    </BrowserRouter></ThemeProvider>
}

export default withAuthenticator(App)