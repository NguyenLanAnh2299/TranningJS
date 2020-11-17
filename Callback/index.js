
function createPassword(callback){
	return callback('admin123');
}
var password =  createPassword(function(secret_key){
	return secret_key;
});
alert(password);

// callback Object
var Employee = {
	name = 'Employee1',
	setName: function(name){
		this.name = name;
	}
};
function test(callback){
	callback('List Employee');
};
test(Employee.setName);
document.write(Employee.name);
document.write(window.name);

//multiple callback function
function funcOne(cb) {
    console.log("one");
    cb.forEach(s => s.apply());
}

function funcTwo() {
    console.log("two");
}

function funcThree() {
    console.log("three");
}

funcOne(funcTwo, funcThree);