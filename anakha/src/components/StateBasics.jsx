import {Button, Typography ,TextField} from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setpname]=useState("");
    var[val,setVal]=useState() 
    const inputHandler =(e)=>{
        setVal(e.target.value);
        console.log(val)
    }
        const changeName=()=>{
            setpname(val)
            setVal("")
        }
    
 

  return (

    <div>
        <Typography variant='h5'>WINDOWS {pname}</Typography>
        <TextField variant='outlined' value={val}label='Name'onChange={inputHandler}/>
        <br/>
        <br/>
        <Button variant='contained'onClick={changeName}>change</Button>
        
    </div>
  )
}

export default StateBasics