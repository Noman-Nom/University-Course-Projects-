import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router'
import Validation from '../../LoginValidation'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      axios.post("http://localhost:8802/login", values)
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

  return (
    <form>
      <div className="container__login">
        <h2>Login</h2>
        <label >Enter Email *</label>
        <input onChange={handleInput} name='email' type="text" placeholder="Email or username" id="email" />
        
        {error.email && <span>{error.email}</span>}
        <label >Password *</label>
        <input onChange={handleInput} name='password' type="text" placeholder="Password" id="password" />
        {error.password && <span>{error.password}</span>}
        <div className="check_inp">
            <input type="checkbox" name="remember" id="rememberMe" />
            <p>Remember me</p>

        </div>

        <button onClick={handleSubmit} type='submit' id="sign_in_btn">Login</button>
        <p> <a href="#" target="_blank">Lost Your password?</a></p>
       <Link to='/signup'> <button  id="sign_in_btn">Create New Account</button></Link>
    </div>
      
    </form>
  )
}

export default Login