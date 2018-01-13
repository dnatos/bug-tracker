var express	 	= require("express"),
	router 		= express.Router(),
 	Product		= require("../models/products"),
 	Categories 	= require("../models/categories"),
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
	Categories.find({}, (err, allCategories)=>{
		if(err){
			console.log('Error');
		} else{
			res.render("products/new", {categories: allCategories});
		}

	});
	
});

router.get("/products/api/categories", (req, res) =>{
	Categories.find({}, (err, categories) =>{
		res.json(categories);
	})

});

router.post("/products/api/categories/new", (req, res)=>{
	console.log('inside the route',req.body.cat);
	Categories.create({category: req.body.cat}, (err, category)=>{
		if(err){
			console.log(err);
		}else{
			category.save();
			res.redirect('back');
		}
	});
	//res.redirect('back');
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