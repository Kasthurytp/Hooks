import React, { useState,useRef } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import AlertBox from '../../../Components/Alert/alert';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import CustomLink from '../../../Components/Link/customLink';
import { useHistory } from 'react-router-dom'
import './SignInBusinessAccount.css'

const theme = createTheme();
export default function SignInBusinessAccount() {

  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState({visible:false, severity:'', message:''});
  const timerRef = useRef(null);
  const history = useHistory();

const handleSubmit = (event) => {
    event.preventDefault();
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then(userInformation => {
      console.log(userInformation);
      history.push('/admin')
    })
    .catch(error => {
    setAlert({ visible:true,severity:'error',message:error.message})
        console.log(error.code);
        timerRef.current= setTimeout(() => {
          setAlert({ visible:false,severity:'',message:''})
        },2000)
  })
};
  
  const handlePassword = () => {
    sendPasswordResetEmail(auth, userInfo.email)
      .then(() => {
        setAlert({ visible: true, severity: 'success', message: 'Email Sent Successfully' })
         timerRef.current= setTimeout(() => {
          setAlert({ visible:false,severity:'',message:''})
        },2000)
      })
      .catch(error => {
      setAlert({ visible:true,severity:'error',message:error.message})
        console.log(error.code);
        timerRef.current= setTimeout(() => {
          setAlert({ visible:false,severity:'',message:''})
        },2000)
    })
  }

  const register = e => {
            history.push('/RegisterBusinessAccount')
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
                  <form onSubmit={handleSubmit} >

                      <h5>E mail</h5>
                      <input type='text' value={userInfo.email} onChange={(event)=>{setUserInfo({...userInfo,email:event.target.value})}}/>

                      <h5>Password</h5>
                      <input type='password' value={userInfo.password} onChange={(event)=>{setUserInfo({...userInfo,password:event.target.value})}}/>

                      <button className='loginSigninButton' type='submit'>Sign In</button>

                  </form>

                  <p>By signing-in you agree to Hooks'searchConditions of use &
                      Sale. Please see our Privacy Notice, our Cookies Noticeand our Interest-Based Ads Notice.
                  </p>
                  <button className='loginSingupButton' onClick={register}>Create Your Account</button>

                  <div className='forgetPassword'><CustomLink message='Forgot Password' handleLink={handlePassword}/></div>
              </div>
          </div> 
        </Box>
      </Container>
  )
}