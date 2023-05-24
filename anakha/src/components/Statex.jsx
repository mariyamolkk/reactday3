import {Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statex = () => {
    var[hname,setHname]=useState("");
    const changeHname = ()=>{
        setHname("Home page")
    }
    const changeGname = ()=>{
        setHname("Gallery page")
    }    
    const changeCname = ()=>{
        setHname("Contact page")
    }
    
  return (
    <div>
        <Button variant='contained' color='primary' onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={changeGname}>Gallery</Button>&nbsp;
        <Button variant='contained' color='success' onClick={changeCname}>Contact</Button>&nbsp;
        <br/>
        <Typography variant='h2'>Welcome to {hname}</Typography>

    </div>
  )
 
  }
export default Statex