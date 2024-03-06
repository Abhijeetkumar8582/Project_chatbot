import {combineReducers} from 'redux'
import scriptReducer from './Script'

const reducer = combineReducers({
    scriptReducer : scriptReducer
})
export default reducer