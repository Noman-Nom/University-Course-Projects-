import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [values, setValues] = useState({

        email: "",
        password: ""
    })

    const handleInput = (e) => {


        setValues((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

    }

    console.log(values)
    return (
        <div className='container'>

            <div className='container__form'>

                <form action="">

                    <div className='form__field'>
                        <label htmlFor="">Email</label>
                        <input onChange={handleInput}  name="email" type="text" placeholder='enter your email' />
                    </div>
                    <div className='form__field'>
                        <label htmlFor="">Password</label>
                        <input onChange={handleInput} name="password" type="text" placeholder='enter your password' />
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