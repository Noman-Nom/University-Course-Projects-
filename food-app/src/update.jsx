import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {


  const {id}= useParams()

  // console.log(id);
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
      await axios.put("http://localhost:8801/test/"+id, user)

      navigate('/')
    } catch (error) {
      console.log(error);
      
    }

  }

  // console.log(user);
  return (
    <div>

      <h1> Update User</h1>
      <input type="number" name='id'  onChange={handleChange} placeholder='enter id' />
      <input type="text" name='name'  onChange={handleChange} placeholder='enter name'/>
      <input type="text" name='email'  onChange={handleChange} placeholder='enter email'/>
      <input type="text" name='desig'  onChange={handleChange} placeholder='enter designation'/>

      <h1>{id}</h1>

      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update