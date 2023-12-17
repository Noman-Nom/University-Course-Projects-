import React from 'react'
import { useState } from 'react'



import Validation from '../SignupValidation'

import './SignUp.scss'
import { Link } from 'react-router-dom'
const SignUp = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    
    })

    const handleChange  = (e)=>{

        setValues((prev)=>({...prev , [e.target.name]: e.target.value }))
    }

    console.log(values)
  return (
    <div className='container'>

    <div className='container__form'>

        <form action="">

            <div className='form__field'>
                <label htmlFor="">Name</label>
                <input  onChange={handleChange} name='name' type="text" placeholder='enter your name' />
            </div>
            <div className='form__field'>
                <label name='email' htmlFor="">Email</label>
                <input  onChange={handleChange} type="email" placeholder='enter your email' />
            </div>
            <div className='form__field'>
                <label htmlFor="">Password</label>
                <input  onChange={handleChange} name='password' type="password" placeholder='enter your password' />
            </div>

            <button>Signup</button>

            <div>
                <Link to='/login'> <p>Login</p></Link>
            </div>

        </form>


    </div>
</div>
  )
}

export default SignUp