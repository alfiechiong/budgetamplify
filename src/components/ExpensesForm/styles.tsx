import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme)=>({
    root:{
        paddingTop:theme.spacing(3)
    },
    textFieldDate: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
}))

export default useStyle