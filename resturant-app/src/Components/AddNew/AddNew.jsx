import {React ,useEffect , useState  }from 'react'
import axios from 'axios'
import './AddNew.scss'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router'




const AddNew = () => {

    const navigate = useNavigate()


    const [value, setValue] = useState({
        id:null,
        img:"",
        title:"",
        description:"",
        offer:""
    })

    const handleChange = (e)=>{

   setValue((prev)=>({...prev, [e.target.name]: e.target.value}))

   console.log(value);
    }


    const handleClick = async ()=>{

     try {

        await axios.post('http://localhost:8802/menu', value)
            console.log("yes");
        // navigate('/menu')
        
     } catch (error) {
        console.log(error);
     }

    }
  return (

    <div>

                

    <div className="addForm">

    <h1><span>Add Product</span><br/>
        Add Your Fvt Food Here ... 
    </h1>
    <div className="top">
        <div className="top__msg">
            <div className="msg-img">
                <img src="https://cdn.pixabay.com/photo/2012/04/13/01/49/burger-31770_1280.png" alt=""/>

            </div>
            <h3>Foods </h3>
        </div>
        <div className="top__msg">
            <div className="msg-img">
                <img src="https://cdn.pixabay.com/photo/2014/06/26/16/33/cocktail-377960_1280.png" alt=""/>

            </div>
            <h3>Drinks</h3>
        </div>
    </div>

    <div className="bottom">
        <div className="bottom__input">
            <input name="id" onChange={handleChange}  type="number" placeholder="enter id"/>

        </div>
        <div className="bottom__input">
            <input name="img" onChange={handleChange}  type="text" placeholder="Paste img URL"/>

        </div>
        <div className="bottom__input">
            <input name="title"  onChange={handleChange} type="email" placeholder="Enter Title"/>

        </div>
       
        <div className="bottom__input">
            <input name="description" onChange={handleChange}  type="email" placeholder="Enter Description"/>

        </div>
      
        <div className="bottom__input">
            <input name="offer" onChange={handleChange}  type="email" placeholder="Enter Offer "/>

        </div>
       
        <button onClick={handleClick} >Add Product</button>
    </div>
</div>
</div>
  )
}

export default AddNew
