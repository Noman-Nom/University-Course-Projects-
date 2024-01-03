import express from "express";
import mysql from "mysql";
const app = express();
import cors from "cors";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food-app",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // console.log();
  res.json("hello this is from backend......");
});
app.get("/signup", (req, res) => {
  const q = "SELECT * FROM signup";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
app.post("/signup", (req, res) => {
  const q = "INSERT INTO signup (`name`, `email`, `password`) VALUES (?)";

  const values = [
    // "name from backend",
    // "email from backend",
    // "password from backend",

    req.body.name,
    req.body.email,
    req.body.password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      // res.json(data)
      res.json("data has been uploaded");
    }
  });
});


app.post("/login", (req, res) => {
  const q = "SELECT * FROM signup  WHERE `email` = ? AND `password` = ?"

 

  db.query(q, [req.body.email , req.body.password], (err, data) => {
    if (err) {
      res.json(err);
    } 
    if(data.length > 0){
        return res.json("success")

    }
     else {
      // res.json(data)
      res.json("ERROR");
    }
  });
});

app.listen(8801, () => {
  console.log("welcome to s4s || connected to backend..!!");
});
