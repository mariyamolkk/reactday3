import React from 'react'
import { TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div>
  <h1>KK</h1>
  <input placeholder='Name'/>
  <br/>
  <input type='password' placeholder='Password'/>
  <br/>
  <br/>
  <button>save</button>
  <br/>

  <Typography variant ='h1'>Mariya</Typography>
  <br/>

  <TextField variant='outlined' label='Name'/>
  <br/>
  <TextField variant='outlined' label='password'/>
    </div>
  )
}

export default First