import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express()
app.use(cors())


const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"food-app"

})

app.get("/", (req,res)=>{
    res.json("hello this is from backend")
})


app.get('/food', (req,res)=>{
const q = "SELECT * FROM food "

    db.query(q,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })

})
app.get('/menu', (req,res)=>{
const q = "SELECT * FROM menu "

    db.query(q,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })

})

app.listen(8802, ()=>{
        console.log("hello this is from backend im noman ");

})