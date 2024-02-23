import React, { use, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';


function EnterDetails() {
    const router = useRouter()
    const [pocName, setPocName] = useState('')
    const [pocScript, setPocScript] = useState('')
    const [pocImage, setPocImage] = useState(null)
    const onChangeName = (e) => {
        setPocName(e.target.value)
    }
    const onChangePocScript=(e)=>{
        setPocScript(e.target.value)
    }
    const onChangepocImage = (e) => {
        setPocImage(e.target.value)
      };
    
      const onButtonClick = ()=>{
        sessionStorage.setItem('pocName',pocName)
        sessionStorage.setItem('Image',pocImage)
        sessionStorage.setItem('script',pocScript)
        router.push('/Deploy')

      }
    return (
        <div style={{ background: 'white', width: '100vw', gap: '20px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'black' }}>
            <div >
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" value={pocName} onChange={(e)=>onChangeName(e)} label="POC Client Name" variant="outlined" />

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
                    <TextField id="outlined-basic" value={pocScript} onChange={(e)=>onChangePocScript(e)}  label="Script" variant="outlined" />

                </Box>
            </div>
            <div>
                <input type="file" value={pocImage} onChange={(e)=>onChangepocImage(e)}  />
            </div>
            <div>
                <button onClick={()=>onButtonClick()}>
                    Sign up
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>

                    </div>
                </button>
            </div>
            <img style={{width:'50px'}} src={pocImage}/>
            <h4>{pocImage}</h4>
           
      
        </div>
    )
}

export default EnterDetails