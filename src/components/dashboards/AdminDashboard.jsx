import React, { useContext } from 'react'
import { Header } from '../other/Header'
import { CreateTask } from '../other/CreateTask'
import AllTasks from '../other/AllTasks'
export const AdminDashboard = (props) => {
  return (
    
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTasks data/>
       
    </div>
    
    
  )
}
