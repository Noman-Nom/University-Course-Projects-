import React from 'react'

import './SignUp.scss'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='container'>

    <div className='container__form'>

        <form action="">

            <div className='form__field'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='enter your name' />
            </div>
            <div className='form__field'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='enter your email' />
            </div>
            <div className='form__field'>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='enter your password' />
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