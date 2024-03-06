import React, { use, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import Script from 'next/script';
import {userScript} from '../Redux/Action/index'
import Deploy from './Deploy';
// Script
import { useDispatch, useSelector } from 'react-redux';
function EnterDetails() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [pocName, setPocName] = useState('')
    const [pocScript, setPocScript] = useState('')
    const [pocImage, setPocImage] = useState(null)
    const [file, setFile] = useState(null);
    const [base64URL, setBase64URL] = useState("");

    const getBase64 = (file) => {
        return new Promise((resolve) => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };
    const script = useSelector(state => state.scriptReducer);
    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];

        getBase64(selectedFile)
            .then((result) => {
                selectedFile["base64"] = result;
                setFile(selectedFile);
                // console.log(result)
                setBase64URL(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const onChangeName = (e) => {
        setPocName(e.target.value)
      
    }
    const onChangePocScript = (e) => {
        setPocScript(e.target.value)

    }
    const onButtonClick = () => {
        const updatedPocScript = pocScript.replace(/&amp;/g, '&');
        sessionStorage.setItem('pocName', pocName)
        sessionStorage.setItem('Image', base64URL)
        sessionStorage.setItem('script',updatedPocScript )
        dispatch(userScript(updatedPocScript))
        console.log(script,"svs")
        console.log(updatedPocScript,"vdssv")
       

        router.push('Deploy')

    }
    return (

        <div className='MainBox'>
            <div className='boxOne'>
                <img style={{ width: '500px' }} src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5412.jpg?t=st=1709295922~exp=1709299522~hmac=aaf7fa3a555535b4cd1c0b334f54727d2ddc173e67eff2aea2a019c727073128&w=1060" />
            </div>
            <div className='box2'>
                <div style={{ background: 'white', gap: '20px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'black' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <h4>{script}Please provide details and test the seamless chatbot with the new interface.🤖</h4>

                    </div>
                    <div >
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" required value={pocName} onChange={(e) => onChangeName(e)} label="POC Client Name" variant="outlined" />

                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" required value={pocScript} onChange={(e) => onChangePocScript(e)} label="Script" variant="outlined" />

                        </Box>
                    </div>
                    <div>
                        <input type="file" value={pocImage} required onChange={handleFileInputChange} />
                    </div>
                    <div>
                        <button onClick={() => onButtonClick()}>
                            Sign up
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>

                            </div>
                        </button>
                    </div>
                    <img style={{ width: '50px' }} src={pocImage} />
                    <h4>{pocImage}</h4>


                </div>
            </div>

        </div>

    )
}

export default EnterDetails
