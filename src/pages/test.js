import React, { useEffect } from 'react';

function Test() {
    useEffect(() => {
        const scriptId = 'druid_webchat_v2_js'; // Replace 'your-script-id' with the ID of your existing script element
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.src = "https://deepesh2.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=59990c83-83de-4e36-0d29-08dc390f6827&amp;baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com";
        } else {
            console.error("Script element not found!");
        }
    }, []);

    return null; // Return null or any other placeholder while the script is loading
}

export default Test;
