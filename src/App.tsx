import {useEffect} from 'react'
import Amplify,{API, Auth, graphqlOperation} from 'aws-amplify'
import {withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import Routes from './components/Routes'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import {BrowserRouter} from 'react-router-dom'
import {listUsers} from './graphql/queries'
import store from './redux/store'
import {Provider} from 'react-redux'
import {setUser} from './redux/actions'

Amplify.configure(awsExports);

const App = () => {

    const isUserExist= async ()=>{
        const user:any = await API.graphql(graphqlOperation(listUsers))
        return user.data.listUsers.items
    }

    useEffect(()=>{
         const userData = (Auth as any).user.attributes

        console.log("Auth", userData )
        setUser(userData)
    })

    return <Provider store={store}><ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes />
    </BrowserRouter></ThemeProvider>
    </Provider>
}

export default withAuthenticator(App)