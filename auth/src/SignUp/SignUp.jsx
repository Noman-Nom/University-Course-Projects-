import React from 'react'
import { useState  } from 'react'
import axios from 'axios'


import Validation from '../SignupValidation'

import './SignUp.scss'
import { Link, useNavigate  } from 'react-router-dom'
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
          axios.post("http://localhost:8801/signup", values)
          .then(res =>{
            navigate('/login')
          })
          .catch(err =>{
            console.log(err)
          })
        }
    }
    console.log(values)
  return (
    <div className='container'>

    <div className='container__form'>

        <form action="">

            <div className='form__field'>
                <label htmlFor="">Name</label>
                <input  onChange={handleChange} name='name' type="text" placeholder='enter your name' />

                {error.name && <span>{error.name}</span>}
            </div>
            <div className='form__field'>
                <label  htmlFor="">Email</label>
                <input name='email'  onChange={handleChange} type="email" placeholder='enter your email' />
                {error.email && <span>{error.email}</span>}
            </div>
            <div className='form__field'>
                <label htmlFor="">Password</label>
                <input  onChange={handleChange} name='password' type="password" placeholder='enter your password' />
                {error.password && <span>{error.password}</span>}
            </div>

            <button type='submit' onClick={handleClick}>Signup</button>

            <div>
                <Link to='/login'> <p>Login</p></Link>
            </div>

        </form>


    </div>
</div>
  )
}

export default SignUp