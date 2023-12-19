import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express()
app.use(cors())



app.get("/", (req,res)=>{
    res.json("hello this is from backend")
})


app.listen(8802, ()=>{
        console.log("hello this is from backend im noman ");

})