var express 		= require("express"),
	app				= express(),
	bodyParser		= require("body-parser"),
	mongoose		= require("mongoose"),
	methodOverride	= require("method-override"),
 	flash 			= require("connect-flash"),
 	Product			= require("./models/products");

var productRoutes 	= require("./routes/products");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bug_tracker", {useMongoClient: true});

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(productRoutes);


 app.listen(3000, ()=>{
 	console.log("Server starts at port 3000 ");
 });