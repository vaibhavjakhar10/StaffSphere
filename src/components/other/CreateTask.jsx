import React, { useContext, useState } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

export const CreateTask = () => {

    const [userData,setUserData]=useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        setNewTask({taskTitle,taskDate, category, description,acive:false,new_task:true,failed:false,completed:false});
        

        const data=userData

        data.forEach(elem => {
            if(elem.firstName==assignTo){
                elem.tasks.push(newTask)
                elem.tasksCounts.new_task=elem.tasksCounts.new_task+1
                
            }

        });
        setUserData(data);
        console.log(data)
        setAssignTo('')
        setTaskTitle('')
        setTaskDate('')
        setCategory('')
        setDescription('')

    }
  return (
    <div className='p-5  bg-[#1C1C1C]  rounded mt-7'>
        
    <form onSubmit={(e)=>{
        submitHandler(e);
    }} className="flex flex-wrap w-full items-start justify-between mt-7 ">
        <div className='w-1/2'>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle}
            onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400' type="text" name="" id="" placeholder='Make a UI design' />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate}
            onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400 ' type="date" name="" id=""  />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
            <input value={assignTo}
            onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400' type="text" name="" id="" placeholder='employee name' />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category}
            onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400' type="text" name="" id="" placeholder='design , etc' />
        </div>

        </div>
        <div className='w-2/5 flex flex-col items-start'>
        
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={description}
            onChange={(e)=>{setDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] bg-transparent border-gray-400 ' name="" id=""></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        
    </form>

</div>
  )
}
