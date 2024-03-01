import Head from 'next/head';
import React, { useEffect, useState } from 'react';
// Head
function Deploy() {
    const [pocImage, getPocImage] = useState(null);
    const [pocTitle,setPocTitle]= useState("")

    useEffect(() => {
        const image = sessionStorage.getItem('Image');
        const title = sessionStorage.getItem('pocName');
        getPocImage(image);
        setPocTitle(title)
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    if (!pocImage) {
        return null; // Render nothing until pocImage is loaded
    }

    return (
        <div >
            <Head>
                <title>{pocTitle}</title>
            </Head>
            <img src={pocImage} style={{ width: '100vw', height: '100vh' }} />
        </div>
    );
}

export default Deploy;
