import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Test = () => {

  const [test, setTest] = useState([])

useEffect(()=>{
  const fetchData = async () =>{
    try {
      
      const res = await axios.get("http://localhost:8801/test")

      console.log(res)
      setTest(res.data)
    } catch (error) {
      // console.log(error)

    }
}

fetchData()
},[])
  return (
    <div>

      <h1>Testing of Crud</h1>
      <div>
       {
        test.map((value)=>(

          <div key={value.id} >

            <h1>{value.id}</h1>
            <p>{value.name}</p>
            <p>{value.email}</p>
            <h3>{value.desig}</h3>

            <button>Delete</button>
            <button>Update</button>
          </div>
        )

        )
       }
      </div>

      <button><Link to="/add">Add new user</Link> </button>

    </div>
  )
}

export default Test