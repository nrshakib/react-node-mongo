const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//midleware
app.use(cors());
app.use(express.json());

//connection
const connecDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/userExpress");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB not connected");
    console.log(error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.post('/user', (req, res) => {
  
})

app.listen(port, async () => {
  console.log("Server is listening");
  await connecDB();
});
