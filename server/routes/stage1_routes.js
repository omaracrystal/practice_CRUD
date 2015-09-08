// var express = require('express');
// var router = express.Router();
// var Penguin = ('../models/penguin');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // GET ALL penguins
// router.get('/penguins', function(req, res, next) {
//   Penguin.find({}, function(err, data){
//     if(err){
//       res.json('message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// // GET single penguin
// router.get('/penguin/:id', function(req, res, next) {
//   Penguin.findbyID(req.params.id, function(err, data) {if(err){
//       res.json('message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// //POST ALL penguins
// router.post('/penguins', function(req, res, next) {
//   newPenguin = new Penguin(function(){
//     name: req.body.name,
//     zoo: req.body.zoo,
//     nemesis: req.body.nemesis
//   })
//   Penguin.save(function(err, data){
//     if(err){
//       res.json('message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// //PUT single penguins
// router.put('/penguin:id', function(req, res, next) {
//   Penguin.findbyIDAndUpdate(req.params.id, update, function(err, data) {
//     if(err){
//       res.json('message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// //Delete single penguin
// router.delete('/penguin:id', function(req, res, next) {
//   Penguin.findbyIDAndDelete(req.params.id, function(err, data) {
//     if(err){
//       res.json('message': err});
//     } else {
//       res.json(data);
//     }
//   });
// });

// module.exports = router;
