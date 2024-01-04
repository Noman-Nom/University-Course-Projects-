import React from 'react'
import './SignUp.scss'
import Validation from '../../SignupValidation'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
const SignUp = () => {
    
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

    const [error, setError] = useState([])

    const handleChange  = (e)=>{

        setValues((prev)=>({...prev , [e.target.name]: e.target.value }))
    }
    const handleClick = (e)=>{
        e.preventDefault()

        setError(Validation(values))
        if(error.name === "" && error.email === "" && error.password === ""){
          axios.post("http://localhost:8802/signup", values)
          .then(res =>{
            navigate('/')
          })
          .catch(err =>{
            console.log(err)
          })
        }
    }
    console.log(values)
  return (
    <form>
    <div className="container__signup">
<h2>Register</h2>
<label >Username</label>
<input name='name'  onChange={handleChange} type="text" placeholder="username" id="username" />
{error.name && <span>{error.name}</span>}
<label >Email address *</label>
<input name='email'  onChange={handleChange} type="text" placeholder="email" id="email" />
{error.email && <span>{error.email}</span>}
<label >Password *</label>
<input  name='password' onChange={handleChange} type="text" placeholder="Password" id="password" />
{error.password && <span>{error.password}</span>}
<div className="check_inp">
   <input type="checkbox" name="remember" id="rememberMe" />
   

</div>

<button type='submit' onClick={handleClick} id="register_btn">Register</button>

</div>

</form>
  )
}

export default SignUp