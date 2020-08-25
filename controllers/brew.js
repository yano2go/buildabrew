const express = require('express');
const router = express.Router();
const Brew = require('../models/brew.js')
//Index
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};


router.get('/', isAuthenticated, (req,res)=>{ 
     Brew.find({}, (error, totalBrews) =>{
          res.render("Index", {
               brew: totalBrews,
               username: req.session.currentUser,
          });
     });
});

router.get('/new', isAuthenticated, (req, res)=>{
     res.render('New');

});

// // Delete
 router.delete("/:id", isAuthenticated, (req, res) => {

   Brew.findByIdAndRemove(req.params.id, (err, brew) => {
     res.redirect("/");
   });
 });

 // Update
 router.put("/:id", isAuthenticated,(req, res) => {
   Brew.findByIdAndUpdate(
     req.params.id,
     req.body,
     { new: true },
     (err, updatedBrew) => {
       res.redirect("/");
       console.log("update triggered")
     }
   );
 });

   // Create
   router.post("/", (req, res) => {
    Brew.create(req.body, (error, madeBrew) => {
      
      res.redirect("/");
    });
  });
  
// // edit

 router.get("/:id/edit", isAuthenticated, (req, res) => {
    
      Brew.findById(req.params.id, (err, gotBrew) => {
       
        res.render("Edit", {
          brew: gotBrew,
        });
      });
    });

//    //SHOW
 router.get("/:id", isAuthenticated, (req, res) => {
     
      Brew.findById(req.params.id, (error, gotBrew) => {
       
        res.render("Show", {
          brew: gotBrew,
        });
      });
    });



module.exports = router;