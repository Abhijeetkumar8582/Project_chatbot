import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';

function Deploy() {
    const [pocImage, setPocImage] = useState(null);
    const [pocName, setPocName] = useState("Druid Demo");
   
    const script = useSelector(state => state.scriptReducer);
    const [pocScript, setPocScript] = useState(script)
    useEffect(() => {
        const image = sessionStorage.getItem('Image');
        const title = sessionStorage.getItem('pocName');
        const poScript = sessionStorage.getItem('script')
        setPocName(title);
        setPocImage(image);
        setPocScript(poScript)
        // <script async type="text/javascript" src={memoizedPocScript}></script>
    }, []);

  
    const memoizedPocScript = useMemo(() => pocScript, [pocScript]);
    
    return (
        <div style={{
            backgroundImage: `url(${pocImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <Head>
                <title>{pocName}</title>
            </Head>
            {/* <h3> {memoizedPocScript}</h3> */}
           
                <script defer type="text/javascript" src={memoizedPocScript}></script>
           
        </div>
    );
}

export default Deploy;