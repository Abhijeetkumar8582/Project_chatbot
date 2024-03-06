import React, { useEffect, useState } from 'react';

function Deploy() {
    const [pocScript, setPocScript] = useState("https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=59990c83-83de-4e36-0d29-08dc390f6827&baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com");
    const [pocImage,setPocImage]=useState(null)

    useEffect(() => {
        setPocScript(sessionStorage.getItem('script'))
        setPocImage(sessionStorage.getItem('Image'))
        // You can do any necessary actions in this useEffect hook if needed
    }, []);

    return (
        <div style={{
            background: `url(${pocImage}) no-repeat center center`,
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <script defer type="text/javascript" src={pocScript}></script>
        </div>
    );
}

export default Deploy;
