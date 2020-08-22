const express = require('express');
const router = express.Router();
const Brew = require('../models/brew.js')
//Index
router.get('/', (req,res)=>{ 
     Brew.find({}, (error, allBrews) =>{
          res.render("Index", {
               brew: allBrews
          });
     });
});

router.get('/new', (req, res)=>{
     res.render('New');

});

// // Delete
 router.delete("/:id", (req, res) => {

   Brew.findByIdAndRemove(req.params.id, (err, brew) => {
     res.redirect("/brew");
   });
 });

 // Update
 router.put("/:id", (req, res) => {
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
      
      res.redirect("/brew");
    });
  });
  
// // edit

 router.get("/:id/edit", (req, res) => {
    
      Brew.findById(req.params.id, (err, foundBrew) => {
       
        res.render("brew", {
          brew: foundBrew,
        });
      });
    });

//    //SHOW
 router.get("/:id", (req, res) => {
     
      Brew.findById(req.params.id, (error, foundBrew) => {
       
        res.render("Show", {
          brew: foundBrew,
        });
      });
    });



module.exports = router;