
import React from 'react'
import { useState } from 'react'

export const Login = () => {
   const [email , setEmail]=useState('');
   const [password , setPassword]= useState(''); 
  
    return (
    <div className ="login-conteiner">
        <div className='from-group'>
          <label htmlFor='email'>email:  </label>
          <input 
          type='email'
          id='email'
          value={email}
          onChange={(e)=>setEmail(e.target-value)}
          required
          />
        </div>
        <div className='from-group'>
            <label htmlFor='password'>password:  </label>
            <input 
            type='password'
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target-value)}
            required
            ></input>
        </div>
            <button type='submit'>login</button>
    </div>
    )
}
export default Login;


