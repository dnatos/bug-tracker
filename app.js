var express 		= require("express"),
	app				= express(),
	bodyParser		= require("body-parser"),
	mongoose		= require("mongoose"),
	methodOverride	= require("method-override"),
 	flash 			= require("connect-flash"),
 	Product			= require("./models/products");
 	Issues 			= require("./models/issues");

var productRoutes 	= require("./routes/products");
var issueRoutes		= require("./routes/issues");

mongoose.Promise 	= global.Promise;
mongoose.connect("mongodb://localhost/bug_tracker", {useMongoClient: true});

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(productRoutes);
app.use(issueRoutes);

 app.listen(3000, ()=>{
 	console.log("Server starts at port 3000 ");
 });