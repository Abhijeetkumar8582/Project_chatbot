import Head from 'next/head';
import Script from 'next/script';
import Test from './test';
import React, { useEffect, useState } from 'react';

function Deploy() {
    const [pocImage, getPocImage] = useState(null);
    const [pocTitle, setPocTitle] = useState("");
    const [pocScript, setPocScript] = useState("");

    // useEffect(() => {
    //     const image = sessionStorage.getItem('Image');
    //     const title = sessionStorage.getItem('pocName');
    //     const script = sessionStorage.getItem('script');

    //     console.log("Script URL:", script); // Log the script URL
    //     getPocImage(image);
    //     setPocTitle(title);
    //     setPocScript(script);
    // }, []);

    if (!pocImage) {
        return null; // Render nothing until pocImage is loaded
    }

    return (
        <div style={{height:'100vh',height:'100vh'}}>
            <Head>
                {/* <title>{pocTitle}</title> */}
            </Head>
            {/* <img src={pocImage} style={{ width: '100%',height:'100%' }} /> */}
            {/* <h4>vsd</h4> */}
            {/* <Test/> */}
            <script defer type="text/javascript" src="https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=59990c83-83de-4e36-0d29-08dc390f6827&amp;baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com">
        </script>
        </div>
        
    );
}


export default Deploy;

