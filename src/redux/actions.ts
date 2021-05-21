import store from './store'
import { SET_USER } from './types'

export const setUser = (payload:any)=>{
    store.dispatch({
        type:SET_USER,
        payload:payload
    })
}
