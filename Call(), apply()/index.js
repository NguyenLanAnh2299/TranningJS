//call //
function InitProduct(name, price){
	this.name = name;
	this.price = price;
}
function Hat( name, price){
	InitProduct.call(this, name, price);
}
function Food(name, price){
	InitProduct.call(this, name, price)
}
var food = new Food("cake", 5)
var hat = new Hat("candy", 5)
console.log(food);
console.log(hat);

//call() anomymous
(function(name) {
    console.log(name);
}).call(this, "Nguyen A");

//call change value this
function showMessage(message){
	this.message = message;
	return this;
}
var blog = showMessage.call("blog", "javascrip")
console.log(blog);

 //apply //

 var blog =  function(name, message){
 	console.log(message + name);
 }
 blog.apply(blog, ['A', 'Hello']);