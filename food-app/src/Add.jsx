import React, { useState } from 'react'

const Add = () => {

  const [user, setUser] = useState({

    id:null,
    name:"",
    email:"",
    desig:""

  })

  const handleChange = (e)=>{

    setUser((prev)=> ({...prev, [e.target.name]: e.target.value}) )   // explain me this code
  }

  console.log(user);
  return (
    <div>

      <h1>Add new User</h1>
      <input type="number" name='id' onChange={handleChange} placeholder='enter id' />
      <input type="text" name='name' onChange={handleChange} placeholder='enter name'/>
      <input type="text" name='email' onChange={handleChange} placeholder='enter email'/>
      <input type="text" name='desig' onChange={handleChange} placeholder='enter designation'/>
    </div>
  )
}

export default Add