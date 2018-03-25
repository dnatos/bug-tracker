const mongoose 								= require("mongoose");
const passportLocalMongoose 	= require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	passport: String,
	email: {
		type: String,
		unique: true,
		require: true
	}, 
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
