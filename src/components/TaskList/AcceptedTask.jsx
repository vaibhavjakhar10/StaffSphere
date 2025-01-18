import React from 'react'

const AcceptedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-yellow-400 h-full w-[300px] rounded-xl px-3 '>
            <div className='px-3 py-5 flex align-center justify-between'>
                <h3 className='bg-red-600 rounded px-2 text-sm'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.task_date}</h4>
            </div>
            <h2 className=' font-semibold text-2xl'>{data.task_title}</h2>
            <p className='mt-2 text-sm'>{data.task_description}</p>
        </div>
        
  )
}

export default AcceptedTask