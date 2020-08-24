const express = require('express');
const router = express.Router();
const Description = require('../models/descriptions.js')

router.get('/kettles', (req, res)=>{
     res.render('Kettles');

});

router.get('/accessories', (req, res)=>{
     res.render('Accessories');

});
router.get('/mashtuns', (req, res)=>{
     res.render('Mashtuns');

});

router.get('/fermenters', (req, res)=>{
     res.render('Fermenters');

});

module.exports = router;