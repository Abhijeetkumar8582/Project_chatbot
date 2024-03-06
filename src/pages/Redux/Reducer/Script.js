const initialValue = 'https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=59990c83-83de-4e36-0d29-08dc390f6827&baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com' 

const scriptReducer =(state=initialValue,action)=>{
    if (action.type == 'userScript'){
        return state + action.payload
    }
    else {
        return state
    }
}

export default scriptReducer;