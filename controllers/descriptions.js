const express = require('express');
const router = express.Router();
const Description = require('../models/descriptions.js')

const isAuthenticated = (req, res, next) => {
     if (req.session.currentUser) {
         return next();
     } else {
         res.redirect('/sessions/new');
     }
 };
router.get('/kettles', isAuthenticated, (req, res)=>{
     res.render('Kettles');

});

router.get('/accessories', isAuthenticated, (req, res)=>{
     res.render('Accessories');

});
router.get('/mashtuns', isAuthenticated, (req, res)=>{
     res.render('Mashtuns');

});

router.get('/fermenters', isAuthenticated, (req, res)=>{
     res.render('Fermenters');

});

router.get('/blog', isAuthenticated, (req, res)=>{
     res.render('Blog');

});

router.post("/", isAuthenticated, (req, res) => {
     Description.create(req.body, (error, createdEquipment) => {
       
       res.redirect("/brew");
     });
   });
   
   
   router.get('/brewingprocess', isAuthenticated, (req, res)=>{
     res.render('BrewingProcess');

});
   

module.exports = router;