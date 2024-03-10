const initialValue = 'test'

const userPocImage =(state=initialValue,action)=>{
    if (action.type == 'PocImage'){
        return  action.payload
    }
    else {
        return state
    }
}

export default userPocImage;