import React from 'react'

export const TaskListNumbers = ({data}) => {
    
  return (
    <div className='text-white mt-10 gap-5 screen flex justify-between'>
        <div className=' px-5 py-9 w-[45%] bg-red-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>{data.tasksCounts.failed}</h1>
            <h1 className='text-xl font-medium'>Failed</h1>
        </div>
        <div className=' px-5 py-9 w-[45%] bg-blue-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>{data.tasksCounts.new_task}</h1>
            <h1 className='text-xl font-medium'>New Task</h1>
        </div>
        <div className=' px-5 py-9 w-[45%] bg-yellow-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>{data.tasksCounts.active}</h1>
            <h1 className='text-xl font-medium'>Accepted Task</h1>
        </div>
        <div className=' px-5 py-9 w-[45%] bg-green-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>{data.tasksCounts.completed}</h1>
            <h1 className='text-xl font-medium'>Completed</h1>
        </div>
    </div>
  )
}
