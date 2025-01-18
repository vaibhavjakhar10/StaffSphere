import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData,setUserData]=useContext(AuthContext)
  return (
    <div className=' bg-[#1c1c1c] p-5  mt-5 rounded '>
        <div className='border-emerald-400 border-2 mb-2 py-2 px-4 flex justify-between rounded text-white text-lg'>
            <h5 className='w-1/5'>Employee Name</h5>
            <h5 className='w-1/5'>New Task</h5>
            <h5 className='w-1/5'>Active </h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        {userData.map((elem,idx)=>{
            return <div key={idx} className=' mb-2 py-2  px-4 flex justify-between   '>
            <h2 className='text-white w-1/5'>{elem.firstName}</h2>
            <h5 className='text-blue-400 w-1/5'>{elem.tasksCounts.new_task}</h5>
            <h5 className='text-yellow-500 w-1/5'>{elem.tasksCounts.active}</h5>
            <h5 className='text-green-400 w-1/5'>{elem.tasksCounts.completed}</h5>
            <h5 className='text-red-400 w-1/5'>{elem.tasksCounts.failed}</h5>
             
        </div>
        })}
        
        
    </div>
  )
}

export default AllTasks