import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>

            <div className='container__form'>

                <form action="">

                    <div className='form__field'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='enter your email' />
                    </div>
                    <div className='form__field'>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='enter your password' />
                    </div>

                    <button>Login</button>

                    <div>
                        <Link to='/signup'> <p>Create Account</p></Link>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default Login