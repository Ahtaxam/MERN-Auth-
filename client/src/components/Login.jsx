import React from 'react'

function Login() {
  return (
    <div>
        <h1 className='loginHeading'>Login</h1>

        <form id='loginForm'>
            <div id='formField'>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" name="email" id="email" className='inputField' />
            </div>
            <div id='formField'>
                <label htmlFor="password" className='label'>Password</label>
                <input type="password" name="password" id="password" className='inputField'/>
            </div>
            <button type="submit" className='loginButton'>Login</button>
            
            <div className='googleLogin'>
                <button className='googleButton'>Login with Google</button>
            </div>
        </form>

        

    </div>
  )
}

export default Login