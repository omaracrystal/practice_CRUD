var express = require('express');
var router = express.Router();
var Penguin = require('../models/penguin');

//following needs additional require tags:
//var Penguin = mongoose.model('penguins');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET ALL penguins
router.get('/penguins', function(req, res, next) {
  Penguin.find({}, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// GET single penguin
router.get('/penguin/:id', function(req, res, next) {
  Penguin.findById(req.params.id, function(err, data) {
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//POST ALL penguins
router.post('/penguins', function(req, res, next) {
  //or req.body by itself
  newPenguin = new Penguin({
    name: req.body.name,
    zoo: req.body.zoo,
    nemesis: req.body.nemesis
  })

  newPenguin.save(function(err, data) {
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//PUT single penguins
router.put('/penguin/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    zoo: req.body.zoo,
    nemesis: req.body.nemesis
  };
  console.log(update);
  Penguin.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//Delete single penguin
router.delete('/penguin/:id', function(req, res, next) {
  Penguin.findByIdAndRemove(req.params.id, function(err, data) {
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
