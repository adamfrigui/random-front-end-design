import { Grid ,Paper,Avatar,TextField,Button} from '@mui/material'
import React from 'react'
import "./Login.css"
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const marg={margin:'8px 0'}
  return (
    <div className='log'>
    <Grid>
       
        <Paper elevation={10} className="log-in ">
    <div className='blur log-blur'></div>
          <Grid align="center">
              <Avatar className="avatar-style"><LockIcon/></Avatar>
              <h2 style={marg}>Log In</h2> 
          </Grid> 
          <TextField label="Username" variant="standard" color="warning" placeholder='Enter username' fullWidth style={marg}/>
          <TextField label="Password" variant="standard" color="warning" placeholder='Enter Password' type="password" fullWidth style={marg}/>
          <Button type='submit' color="warning" variant="contained" fullWidth style={{margin:'30px 0'}}>Log in</Button>
          <h2 className='go-back' onClick={()=>navigate("/")}>Go back to Home page</h2>
           
        </Paper>
        
    </Grid>
    </div>
  )
}
export default Login