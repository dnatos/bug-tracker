var express = require("express"),
	router	= express.Router(),
	User	= require("../models/users.js"),
	bodyParser = require("body-parser"),
	isLoggedIn = require("../middleware");

router.get("/register", (req,res) =>{
	res.render("register");
});

router.post("/register", (req,res) =>{
	User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/products");
		});

	});
});

router.get("/login", (req,res) =>{
	res.render("register/login")
});

router.post("/login", passport.authenticate("local", {
	successRedirect: "/products",
	failureRedirect: "/login"
}) ,(req,res) =>{

});

router.get("/logout", (req,res) =>{
	req.logout();
	res.redirect("/");
});

module.exports = router;