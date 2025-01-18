import React from 'react'

export const Header = (props) => {
  const LogoutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className='flex align-bottom justify-between '>
        <h1 className='text-white font-semibold text-2xl'>Hello <br /> <span className='text-3x'>username 👋</span>   </h1>
        <button onClick={LogoutUser} className='bg-red-600 rounded  text-xl text-white px-3 '>Log Out</button>
    </div>
  )
}
