import React, { useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase'
import AlertBox from '../../../Components/Alert/alert';
import CustomLink from '../../../Components/Link/customLink';


const theme = createTheme();

export default function RegisterBusinessAccount() {

  const [userInfo, setUserInfo] = useState({ userName: '', email: '', password: '' });
  const [alert, setAlert] = useState({visible:false, severity:'', message:''});
  const timerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    return clearTimeout(timerRef.current)
  },[])
  
  //On Click of submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userInfo.email,userInfo.password)
      .then((userInformation) => {
         console.log(userInformation, userInformation.user)
         updateProfile(auth.currentUser, {
          displayName:userInfo.userName
         })
        sendEmailVerification(auth.currentUser)
        history.push('/SignInBusinessAccount')
      })
      .catch(error => {
        setAlert({ visible:true,severity:'error',message:error.message})
        console.log(error.code);
        timerRef.current= setTimeout(() => {
          setAlert({ visible:false,severity:'',message:''})
        },2000)
    })
  };

  const SignInBusinessAccount = e => {
    history.push('/SignInBusinessAccount')
}

  return (
      <Container component="main" maxWidth="xs">
        <AlertBox visible={alert.visible} severity={alert.severity} message={alert.message}/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <div className='login'>
              <Link to='/' style={{ textDecoration: 'none' }}>
                  <h1 className='loginLogo'>Hooks</h1>
              </Link>

              <div className='loginContainer'>
                  <h1>Sign in</h1>
                  <form onSubmit={handleSubmit}>

                      <h5>Business Name</h5>
                      <input type='text' value={userInfo.userName} onChange={(event) => setUserInfo({ ...userInfo, userName: event.target.value })}/>

                      <h5>E mail</h5>
                      <input type='text' value={userInfo.email} onChange={(event) => setUserInfo({ ...userInfo, email: event.target.value })}/>

                      <h5>Password</h5>
                      <input type='password' value={userInfo.password} onChange={(event) => setUserInfo({ ...userInfo, password: event.target.value })}/>

                      <button className='loginSingupButton' type="submit">Create Your Account</button>
                  </form>

                  <p>By signing-in you agree to Hooks'searchConditions of use &
                      Sale. Please see our Privacy Notice, our Cookies Noticeand our Interest-Based Ads Notice.
                  </p>
                  <button className='loginSigninButton' onClick={SignInBusinessAccount}>Sign In</button>

              </div>
          </div> 
        </Box>
    </Container>
  );
}
