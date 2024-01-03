import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: "",
  database: "food-app"
});

app.get("/", (req, res) => {
  res.json("hello this is from backend");
});

app.get('/food', (req, res) => {
  const q = "SELECT * FROM food ";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.get('/menu', (req, res) => {
  const q = "SELECT * FROM menu ";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
app.get('/cart', (req, res) => {
  const q = "SELECT * FROM cart ";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.post('/menu', (req, res) => {
  const q = "INSERT INTO menu (id, img, title, description, offer) VALUES (?) ";

  const values = [
    req.body.id,
    req.body.img,
    req.body.title,
    req.body.description,
    req.body.offer
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Data has been uploaded");
    }
  });
});
app.post('/food', (req, res) => {
  const q = "INSERT INTO food (id, img, title, description,price, offer) VALUES (?) ";

  const values = [
    req.body.id,
    req.body.img,
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.offer
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Data has been uploaded");
    }
  });
});

//  delete from menu

app.delete("/menu/:id",(req,res)=>{

    const menuId = req.params.id;
    
    const q = "DELETE FROM menu WHERE id = ?"

    db.query(q,[menuId],(err,data)=>{

        if(err){

            res.json(err)
            console.log(menuId)
        }else{
            // res.json(data)
            res.json("book has been deleted sucessfullly,,,")
        }
    })
})
//  delete from food

app.delete("/food/:id",(req,res)=>{

    const foodId = req.params.id;
    
    const q = "DELETE FROM food WHERE id = ?"

    db.query(q,[foodId],(err,data)=>{

        if(err){

            res.json(err)
            console.log(foodId)
        }else{
            // res.json(data)
            res.json("book has been deleted sucessfullly,,,")
        }
    })
})


app.delete("/cart/:id",(req,res)=>{

    const cartId = req.params.id;
    
    const q = "DELETE FROM cart WHERE id = ?"

    db.query(q,[cartId],(err,data)=>{

        if(err){

            res.json(err)
            console.log(cartId)
        }else{
            // res.json(data)
            res.json("book has been deleted sucessfullly,,,")
        }
    })
})

// add to cart functionality

app.post("/cart",(req,res)=>{

  const q = "INSERT INTO cart ( id , img, title, description, price, offer) VALUES (?) ";

  const values = [
   
    req.body.id,
    req.body.img,
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.offer
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Data has been uploaded");
    }
  });
})

//  auth

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
// 
app.listen(8802, () => {
  console.log("Hello, this is from the backend. I'm Noman.");
});
