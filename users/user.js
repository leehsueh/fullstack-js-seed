var uuid = require('node-uuid');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  uuid: { type: String, default: uuid.v1() },
  name: String,
  email: String,
  dateCreated: { type: Date, default: Date.now },
});

userSchema.statics.findByUuid = function(uuid, callback) {
  this.find({uuid: uuid}, callback);
};

userSchema.index({ uuid: 1 });
var User = mongoose.model('User', userSchema);


module.exports = User;