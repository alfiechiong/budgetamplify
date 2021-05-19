import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        padding:theme.spacing(2),
        border:"solid thin #9999",
        color:"#ffff",
        backgroundColor:"#1050B7",
        alignItems:"center"
    },
    rightPanel:{
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center"
    }
}))

export default useStyles
