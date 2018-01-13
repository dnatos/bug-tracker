
$('#product_category_list').change(function(){
	if($(this).val() === 'new'){
		$('#add_category').css({
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '5px'
		})
	}
});

$('#add_btn').on('click',function(e){
	e.preventDefault();
	let category = capitalize($('#input_add').val());
	console.log(category);
	add_category(category);
	$('#product_category_list option:last').before(`<option value${category}>${category}</option>`)
	$('#add_category').val('');
	$('#add_category').css({
			display: 'none'});
});

function add_category(category){
	axios.post("/products/api/categories/new",{
		cat: category,
	})
	.then(function(data){
		console.log(data);
	})
}

function capitalize(cat){
	let str = cat.split(' ');
	return str.map(function(values,index){
		return values.charAt(0).toUpperCase() + values.slice(1);

	}).join(' ');
}