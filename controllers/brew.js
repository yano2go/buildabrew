const express = require('express');
const router = express.Router();
const Brew = require('../models/brew.js')
//Index
router.get('/', (req,res)=>{ 
     Brew.find({}, (error, totalBrews) =>{
          res.render("Index", {
               brew: totalBrews
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
     (err, updatedBrew) => {
       res.redirect("/brew");
       console.log("update triggered")
     }
   );
 });

   // Create
   router.post("/", (req, res) => {
    Brew.create(req.body, (error, madeBrew) => {
      
      res.redirect("/brew");
    });
  });
  
// // edit

 router.get("/:id/edit", (req, res) => {
    
      Brew.findById(req.params.id, (err, gotBrew) => {
       
        res.render("Edit", {
          brew: gotBrew,
        });
      });
    });

//    //SHOW
 router.get("/:id", (req, res) => {
     
      Brew.findById(req.params.id, (error, gotBrew) => {
       
        res.render("Show", {
          brew: gotBrew,
        });
      });
    });



module.exports = router;