var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {Type: String, required: true, maxLength:100}
  }
);



//Export model
module.exports = mongoose.model('Genre', GenreSchema);
