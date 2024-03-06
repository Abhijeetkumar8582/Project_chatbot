import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Deploy() {
    // const userScript = sessionStorage.getItem('script')
    // const [pocScript, setPocScript] = useState(userScript)
    const [pocImage, setPocImage] = useState(null);
    const script = useSelector(state => state.scriptReducer);
    useEffect(() => {
        // const script = sessionStorage.getItem('script');
        const image = sessionStorage.getItem('Image');
        console.log(script)
        setPocImage(image);
        // if (script && image) {
        //     setPocScript(script);
        //     setPocImage(image);
        // }
    }, []); // Empty dependency array to run once on component mount

    return (
        <div style={{
            backgroundImage: `url(${pocImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
         <script defer type="text/javascript" src={script}></script>
        </div>
    );
}

export default Deploy;
