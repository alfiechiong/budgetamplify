import { isNull } from 'util'
import {SET_USER} from '../types'
const initialState = Object.freeze({
    sub: null,
    email_verified: null,
    phone_number_verified: null,
    phone_number: null,
    email: null,
    game:null,
})

const userReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case SET_USER:
            return {...state, 
                sub:action.payload.sub,
                email_verified:action.payload.email_verified,
                phone_number_verified:action.payload.phone_number_verified,
                phone_number:action.payload.phone_number,
                email:action.payload.email
            }
        default:return state
    }
}

export default userReducer
