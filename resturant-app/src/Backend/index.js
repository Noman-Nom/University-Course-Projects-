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

app.listen(8802, () => {
  console.log("Hello, this is from the backend. I'm Noman.");
});
