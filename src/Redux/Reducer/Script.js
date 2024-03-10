const initialValue = 'https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=d9f8d541-047a-482a-acdd-08dc3ee3269b&baseUrl=https://druidapi.comm.eu.druidplatform.com'

const scriptReducer =(state=initialValue,action)=>{
    if (action.type == 'userScript'){
        return  action.payload
    }
    else {
        return state
    }
}

export default scriptReducer;