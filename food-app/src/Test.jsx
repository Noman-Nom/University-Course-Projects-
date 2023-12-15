import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const Test = () => {

  const [test, setTest] = useState([])

useEffect(()=>{
  const fetchData = async () =>{
    try {
      
      const res = await axios.get("http://localhost:8801/test")

      console.log(res)
    } catch (error) {
      console.log(error)
    }
}

fetchData()
},[])
  return (
    <div>Test</div>
  )
}

export default Test