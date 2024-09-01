const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://vivek:0Pt1jgsRXxtwBN2b@cluster0.mbcuvrk.mongodb.net/");

const User = mongoose.model('Users', { name : String, email: String, password: String });

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  
  if (existingUser) {
    return res.status(403).json({
      msg: "User already exists",
    });
  }

  const user = new User({
    name: "Vivek",
    email: "vivek@gmail.com",
    password: "12345678",
  });

  user.save();

  res.json({
    "msg": "User created successfully"
  })
});