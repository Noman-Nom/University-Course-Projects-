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


app.delete("/test/:id",(req,res)=>{

    const testId = req.params.id;
    
    const q = "DELETE FROM test WHERE id = ?"

    db.query(q,[testId],(err,data)=>{

        if(err){

            res.json(err)
        }else{
            // res.json(data)
            res.json("book has been deleted sucessfullly,,,")
        }
    })
})
app.put("/test/:id",(req,res)=>{

    const testId = req.params.id;
    
    const q = "UPDATE test SET `id` = ?, `name` = ?,  `email`= ? , `desig` = ? WHERE id = ? ";


    const values = [

        req.body.id,
        req.body.name,
        req.body.email,
        req.body.desig,
      
    ]

    db.query(q,[...values, testId],(err,data)=>{

        if(err){

            res.json(err)
        }else{
            // res.json(data)
            res.json("book has been updated sucessfullly,,,")
        }
    })
})



app.listen(8801,()=>{

    console.log("welcome to s4s || connected to backend..!!");
})
