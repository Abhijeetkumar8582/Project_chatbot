import React, { useEffect, useState } from 'react';

function Deploy() {
    const [Pocscript, setPocScript] = useState('https://pocs1.community.druidplatform.com/v2/druid_webchat_v2_load.js?botId=81fd9fae-937a-4a84-b2ec-08dc18211ddc&amp;baseUrl=https%3A%2F%2Fdruidapi.comm.eu.druidplatform.com');

    useEffect(() => {
        console.log('Pocscript:', Pocscript);
        const script = document.createElement('script');

        script.src = sessionStorage.getItem('script');

        script.onload = () => {
            console.log('Script loaded successfully');
            // You can do additional actions here if needed
        };

        script.onerror = () => {
            console.error('Error loading script');
            // Handle error if script fails to load
        };

        document.head.appendChild(script);

        return () => {
            // Clean up function to remove the script if component unmounts
            document.head.removeChild(script);
        };
    }, [Pocscript]);

    return (
        <div>
            <h4>{Pocscript}</h4>
        </div>
    );
}

export default Deploy;
