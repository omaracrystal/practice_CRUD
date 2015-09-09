var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var Penguin = new Schema ({
  name: String,
  zoo: Boolean,
  nemesis: String
});



// setting the stage for more advanced uses of environmental variables
//setting uri mongodb://... to variable DB_HOST
process.env.DB_HOST = 'mongodb://localhost/node-penguins';

mongoose.connect('mongodb://localhost/node-penguins');

module.exports = mongoose.model('penguins', Penguin);
