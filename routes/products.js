var express	 	= require("express"),
	router 		= express.Router(),
 	Product		= require("../models/products"),
 	middleware 	= require("../middleware");


router.get("/", (req, res) =>{
	res.render("home")
});

router.get("/products", middleware.isLoggedIn, (req, res) =>{
	Product.find({}, (err, allProducts) =>{
		if(err){
			console.log(err);
		} else {
			res.render("products/index", {products: allProducts});
		}
	});
	
});

router.get("/products/new", (req, res) =>{
	res.render("products/new");
});

router.post("/products", (req, res) =>{

	Product.create(req.body.product, (err, product) =>{
		if(err){
			console.log(err);
		} else{
			product.save();
			//console.log(product);
			res.redirect("/products");
		}
	});
});



module.exports = router;