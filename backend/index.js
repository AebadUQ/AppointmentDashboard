const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "ice",
});
app.post("/addapp", (req, res) => {
  const custcar = req.body.custcar;
  const custdate = req.body.custdate;
  const custnum = req.body.custnum;
  const status = req.body.status;
  const servicesStr = req.body.servicesStr;
  const serCashStr = req.body.serCashStr;
  const servicesStr2 = req.body.servicesStr2;
  const serCashStr2 = req.body.serCashStr2;
  const servicesStr3 = req.body.servicesStr3;
  const serCashStr3 = req.body.serCashStr3;
  const totalCash = req.body.totalCash;
  db.query(
    "INSERT INTO record (custcar,custdate,custnum,status,servicesStr,serCashStr,servicesStr2,serCashStr2,servicesStr3,serCashStr3,totalCash) VALUE (?,?,?,?,?,?,?,?,?,?,?)",
    [
      custcar,
      custdate,
      custnum,
      status,
      servicesStr,
      serCashStr,
      servicesStr2,
      serCashStr2,
      servicesStr3,
      serCashStr3,
      totalCash,
    ],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserting into appoint table");
      }
    }
  );
});
app.get("/totaluser", (req, res) => {
  db.query("Select * from record", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getdate", (req, res) => {
  db.query("Select * from tester", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// const date_str = "07/20/2021";
// const date = new Date(date_str);
// const full_day_name = date.toLocaleDateString('default', { weekday: 'long' });
// // -> to get full day name e.g. Tuesday

// const short_day_name = date.toLocaleDateString('default', { weekday: 'short' });
// console.log(short_day_name);
// // -> TO get the short day name e.g. Tue

app.listen(3001, () => {
  console.log("db working");
});
