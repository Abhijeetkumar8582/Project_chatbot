const initialValue = 'Druid Demo'

const userPocName =(state=initialValue,action)=>{
    if (action.type == 'PocName'){
        return  action.payload
    }
    else {
        return state
    }
}

export default userPocName;