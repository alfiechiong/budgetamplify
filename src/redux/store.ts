import {createStore } from 'redux'
import rootReducer from './reducers'


const store = createStore(rootReducer,(window && (window as any).window.__REDUX_DEVTOOLS_EXTENSION__) && (window && (window as any).window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
