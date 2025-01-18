import React, { useContext, useEffect, useState } from 'react'
import { EmployeeDashboard } from './components/dashboards/EmployeeDashboard'
import { AdminDashboard } from './components/dashboards/AdminDashboard'
import {Login} from './components/auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    
  }, [])
  
  
  

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=>email==e.email && password==e.password)
      if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else alert('invalid');
  }
  
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :''}
    {user=='admin'? <AdminDashboard changeUser={setUser} />: (user=='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App