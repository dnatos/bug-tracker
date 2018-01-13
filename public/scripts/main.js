
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
	if(category === ''){
		return alert('Please add a valid category');
	} 
	console.log(category);
	add_category(category);
	$('#product_category_list option:last').before(`<option selected value${category}>${category}</option>`)
	$('#input_add').val('');
	$('#add_category').css({
			display: 'none'});
});

function add_category(category){
	axios.post("/products/api/categories/new",{
		cat: category,
	})
	
}

function capitalize(cat){
	let str = cat.toLowerCase().split(' ');
	return str.map(function(values){
		return values.charAt(0).toUpperCase() + values.slice(1);

	}).join(' ');
}