require('dotenv').config()
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override"); 
const mongoURI = process.env.APILINK;
const userController = require('./controllers/userController.js');
const session = require('express-session'); 
const User = require('./models/users.js'); 
const bcrypt = require('bcrypt'); 




app.use(express.static("/public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));
app.use(
  session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
  })
);




mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
const brewMaster = require('./controllers/brew.js');
app.use("/", brewMaster);

const learnToBrew = require('./controllers/descriptions.js');
app.use("/learn", learnToBrew);


const userPass = require('./controllers/userController.js')
app.use('/user', userPass);


const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
      return next();
  } else {
      res.redirect('/sessions/new');
  }
};


app.get('/sessions/new', (req, res) => {
  res.render('sessions/New', { currentUser: req.session.currentUser });
});


app.post('/sessions/', (req, res) => {

  User.findOne({ username: req.body.username }, (err, foundUser) => {
      if (err) {
          
          res.send(err);
      } else if (!foundUser) {
          
          res.redirect('/user/new');
      } else {
         
          if (bcrypt.compareSync(req.body.password, foundUser.password)) {
              
              req.session.currentUser = foundUser.username;
              res.redirect('/');
          } else {
              
              res.send('WRONG PASSWORD');
          }
      }
  });
});

app.delete('/sessions/', (req, res) => {
  req.session.destroy(() => {
      res.redirect('/sessions/new');
  });
});



app.listen(PORT, ()=>{
  console.log('nodemon if you crash again i will hunt you down and pkill you ' + PORT);
})

 