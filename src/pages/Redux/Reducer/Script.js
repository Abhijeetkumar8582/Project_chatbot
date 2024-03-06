const initialValue = 'https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=eddf426e-31f0-47d3-45d7-08dc2e003ded&baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com' 

const scriptReducer =(state=initialValue,action)=>{
    if (action.type == 'userScript'){
        return  action.payload
    }
    else {
        return state
    }
}

export default scriptReducer;