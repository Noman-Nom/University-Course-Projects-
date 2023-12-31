import React from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Validation from '../LoginValidation'
import axios from 'axios'





const Login = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({

        email: "",
        password: ""
    })

        const [error, setError] = useState([])

    const handleInput = (e) => {


        setValues((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        setError(Validation(values))
        if(error.email === "" && error.password === ""){
            axios.post("http://localhost:8801/login", values)
            .then(res =>{
                    if(res.data ==="success" ){

                        navigate('/home')
                    }else{
                        alert('no record existed')
                    }
            })
            .catch(err =>{
              console.log(err)
            })
          }
    
    }

    // console.log(values)
    return (
        <div className='container'>

            <div className='container__form'>

                <form action="">

                    <div className='form__field'>
                        <label htmlFor="">Email</label>
                        <input onChange={handleInput}  name="email" type="email" placeholder='enter your email' />


                        {error.email && <span>{error.email}</span>}
                    </div>
                    <div className='form__field'>
                        <label htmlFor="">Password</label>
                        <input onChange={handleInput} name="password" type="password" placeholder='enter your password' />

                        {error.password && <span>{error.password}</span>}
                    </div>

                    <button onClick={handleSubmit} type="submit">Login</button>

                    <div>
                        <Link to='/signup'> <p>Create Account</p></Link>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default Login