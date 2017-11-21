var express	 	= require("express"),
	router 		= express.Router(),
 	Product		= require("../models/products"),
 	Issues		= require("../models/issues");


router.get("/products/:id/issues", (req, res) =>{
	Product.findById(req.params.id).populate("issue").exec((err, allProducts) =>{
		if(err){
			console.log(err);
		} else {
			//console.log(allProducts);
			res.render("issues/issues", {products: allProducts});
		}
	});
	
});

router.post("/products/:id/issues", (req, res) =>{
	Product.findById(req.params.id, (err, product)=>{
		if(err){
			console.log(err);
			res.redirect("/products");
		} else {
			Issues.create(req.body.issues, (err, issue) =>{
				if(err){
					console.log(err);
				} else{
					issue.save();
					product.issue.push(issue);
					product.save();
					res.redirect("/products/" + req.params.id + "/issues");
				}
			});
		}
	});

});

module.exports = router;