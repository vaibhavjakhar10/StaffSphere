import React, { useState } from 'react'

export const Login = ({handleLogin}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(Email,Password)
    setEmail("");
    setPassword("");
  }

  
  return (
    <>
    <div className=''></div>
    <div className='flex items-center justify-center bg-[#1c1c1c] h-screen w-screen'>

      <div className='border-2 border-emerald-500 p-20 rounded-xl'>
        
          <form onSubmit={(e)=>{
            submitHandler(e);
            
          }} className='flex flex-col items-center justify-center gap-5  '>
            <input value={Email} onChange={(e)=>setEmail(e.target.value)} className='text-white border-2 outline-none border-emerald-500 bg-transparent text-xl rounded-full py-3 px-5 placeholder:text-gray-200' type="email" placeholder='Enter your email' />
            <input value={Password} onChange={(e)=>setPassword(e.target.value)} className='text-white border-2 outline-none border-emerald-500 bg-transparent text-xl rounded-full py-3 px-5 placeholder:text-gray-200' type="password" placeholder='Enter your password' />
            <button  className='text-white rounded-full bg-emerald-500 px-5 py-3'>Login</button>
          </form>
        
      </div>

    </div>
    </>
  )
}
