import express from 'express'
import mysql from 'mysql'
const app = express()
import cors from 'cors'



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

//  to send dta to express server then mysql from postman method
app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    // console.log();
    res.json("hello this is from backend......")

})

app.get('/test',(req,res)=>{

    const q = "SELECT * FROM test"

    db.query(q,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })

})

app.post("/test", (req,res)=>{

    const q = "INSERT INTO test (`id`,`name`, `email`, `desig`) VALUES (?)"

    const values = [

        // "id from backend",
        // "name from backend",
        // "email from backend",
        // "desig from backend",

        req.body.id,
        req.body.name,
        req.body.email,
        req.body.desig,
      


        
    ]

    db.query(q,[values],(err,data)=>{

        if(err){

            res.json(err)
        }else{
            // res.json(data)
            res.json("data has been uploaded")
        }
    })

})



app.listen(8801,()=>{

    console.log("welcome to s4s || connected to backend..!!");
})
