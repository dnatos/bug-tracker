var express	 	= require("express"),
	router 		= express.Router(),
 	Product		= require("../models/products");


router.get("/", (req, res) =>{
	res.render("home")
});

router.get("/products", (req, res) =>{
	res.render("products/index");
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
			console.log(product);
			res.redirect("/products");
		}
	});
});

module.exports = router;