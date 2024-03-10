import {combineReducers} from 'redux'
import scriptReducer from './Script'
import userPocImage from './PocImage'
import userPocName from './PocName'

const reducer = combineReducers({
    scriptReducer : scriptReducer,
    userPocImage:userPocImage,
    userPocName:userPocName

})
export default reducer