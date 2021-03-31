var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	name: String,
	description: String,
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	url: {type: String, unique: true, sparse: true, trim: true}
});

Schema.methods.create = function(obj, user, sd) {
	this.author = user._id;
	this.name = obj.name;
	this.description = obj.description;
}

module.exports = mongoose.model('CNAME', Schema);