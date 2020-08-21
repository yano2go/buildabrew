const express = require('express');
const router = express.Router();
const Brew = require('../models/brew.js')
//Index
router.get('/', (req,res)=>{ 
     Brew.find({}, (error, allBrews) =>{
          res.render("Index", {
               brew: allBrews,
          });
     });
});

router.get('/new', (req, res)=>{
     res.render('New');
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Brew.findByIdAndRemove(req.params.id, (err, brew) => {
    res.redirect("/brew");
  });
});

// Update
router.put("/:id", (req, res) => {

  // Update the fruit document using our model
  Brew.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/brew");
    }
  );
});

   // Create
   router.post("/", (req, res) => {
    Brew.create(req.body, (error, createdBrew) => {
      // Once created - respond to client
      res.redirect("/brew");
    });
  });
  


router.get("/:id/edit", (req, res) => {
     // Find our document from the collection - using mongoose model
     Brew.findById(req.params.id, (err, foundBrew) => {
       // render the edit view and pass it the found fruit
       res.render("brew", {
         brew: foundBrew,
       });
     });
   });

router.get("/:id", (req, res) => {
     // Find the specific document
     Brew.findById(req.params.id, (error, foundBrew) => {
       // render the Show route and pass it the foundFruit
       res.render("Show", {
         brew: foundBrew,
       });
     });
   });



module.exports = router;