import Head from 'next/head';
import React, { useEffect, useState } from 'react';

function Deploy() {
    const [pocImage, getPocImage] = useState(null);
    const [pocTitle, setPocTitle] = useState("");
    const [pocScript, setPocScript] = useState("");
    const [scriptError, setScriptError] = useState(false);

    useEffect(() => {
        const image = sessionStorage.getItem('Image');
        const title = sessionStorage.getItem('pocName');
        const script = sessionStorage.getItem('script');

        getPocImage(image);
        setPocTitle(title);
        setPocScript(script);
    }, []);

    const handleImageLoad = () => {
        console.log("Image loaded, now executing script...");
        if (pocScript) {
            const scriptElement = document.createElement('script');
            scriptElement.src = pocScript;
            scriptElement.defer = true;
            scriptElement.onerror = () => {
                setScriptError(true);
            };
            scriptElement.onload = () => {
                console.log("Script loaded successfully!");
            };
            document.body.appendChild(scriptElement);
        }
    };

    if (!pocImage) {
        return null; // Render nothing until pocImage is loaded
    }

    return (
        <>
            <Head>
                <title>{pocTitle}</title>
            </Head>
            <img src={pocImage} style={{ width: '100vw', height: '100vh' }} onLoad={handleImageLoad} />
            {scriptError && <p>Error loading script</p>}
        </>
    );
}

export default Deploy;
