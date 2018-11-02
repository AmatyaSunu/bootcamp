var mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  	note: String,
  	createDate : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Notes', NoteSchema);
