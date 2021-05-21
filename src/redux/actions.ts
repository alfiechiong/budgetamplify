import store from './store'
import { SET_USER } from './types'

export const setUser = (payload:any)=>{
    console.log(payload)
    store.dispatch({
        type:SET_USER,
        payload:payload
    })
}
