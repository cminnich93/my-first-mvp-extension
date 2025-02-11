var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
//var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn")
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

router.post("/register", async (req, res) => {
  //extract username and password from the req body
  const { email, password } = req.body;

  try {
    //keep the hashed version of the password here
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (email, password) VALUES ("${email}", "${hash}")`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      //find the user in the database based on the email
      const results = await db(
        `SELECT * FROM users WHERE email = "${email}"`
      );
      //store it in a variable
      const user = results.data[0];
  
      if (user) {
        const user_id = user.id;
  
        //check if the password is correct => compare the hashed version of the passwords
        // returns a boolean => if they are the same => true / else => false
        const correctPassword = await bcrypt.compare(password, user.password);
  
        //if the password is incorrect throw an Error (go to the catch black)
        if (!correctPassword) throw new Error("Incorrect password");
  
        //if the password is correct, create a JWT
        var token = jwt.sign({ user_id }, supersecret);
        res.send({ message: "Login successful, here is your token", token });
      } else {
        throw new Error("User does not exist");
      }
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  module.exports = router;