import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const [user, setUser] = useState({

    id:null,
    name:"",
    email:"",
    desig:""

  })

  const navigate = useNavigate()

  const handleChange = (e)=>{

    setUser((prev)=> ({...prev, [e.target.name]: e.target.value}) )   // explain me this code
  }


  const handleClick =  async (e)=>{

    e.preventDefault()

    try {
      await axios.post("http://localhost:8801/test", user)

      navigate('/')
    } catch (error) {
      console.log(error);
      
    }

  }

  // console.log(user);
  return (
    <div>

      <h1>Add new User</h1>
      <input type="number" name='id' onChange={handleChange} placeholder='enter id' />
      <input type="text" name='name' onChange={handleChange} placeholder='enter name'/>
      <input type="text" name='email' onChange={handleChange} placeholder='enter email'/>
      <input type="text" name='desig' onChange={handleChange} placeholder='enter designation'/>

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add