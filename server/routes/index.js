var express = require('express');
var router = express.Router();
var Penguin = require('../models/penguin');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET ALL penguins
router.get('/penguins', function(req, res, next) {
  Penguin.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// GET single penguin
router.get('/penguin/:id', function(req, res, next) {
  Penguin.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// POST ALL penguins
router.post('/penguins', function(req, res, next) {
  // newPenguin = new Penguin({
  //   name: req.body.name,
  //   zoo: req.body.zoo,
  //   nemesis: req.body.nemesis
  // });
  newPenguin = new Penguin(req.body);
  newPenguin.save(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// PUT single penguin
router.put('/penguin/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    zoo: req.body.zoo,
    nemesis: req.body.nemesis
  };
  Penguin.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// DELETE single penguin
router.delete('/penguin/:id', function(req, res, next) {
  Penguin.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
