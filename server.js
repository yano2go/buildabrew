require('dotenv').config()
const PORT = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override"); 
const mongoURI = process.env.APILINK;





app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));





mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
const brewMaster = require('./controllers/brew.js');
app.use("/brew", brewMaster);


app.listen(PORT, ()=>{
  console.log('nodemon if you crash again i will hunt you down and pkill you ' + PORT);
})

 