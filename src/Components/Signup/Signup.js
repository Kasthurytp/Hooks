import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <div className='signup'>
      <div className='container'>
            <div className='signupbox'>
                <form>
                    <h3>Sign in</h3>
                    <input  placeholder="Name"></input>
                    <input  placeholder="Email"></input>
                    <input  placeholder="Password"></input>
                    <button className='continue'>Continue</button>
                    <p className='policy'>By Continuing, you agree to Hooks's condition of use and privacy notice.</p>
                    <p className='help'>Need help?</p>
                </form>
                <hr></hr>
                <p className='nHooks'>New to Hooks?</p>
                <button className='newAccountBtn'>Create your Hooks account</button>
            </div>
      </div>
    </div>
  )
}
