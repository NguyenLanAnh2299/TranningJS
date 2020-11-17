//try-catch base
var n = 3;
try{
	if (n %2 === 0) {
		console.log(" la so chan");
	}else{
		throw(e);
	}
} catch (e){
	console.log(" la so le");
} finally{
    console.log('End of try cache');
}

//use throw new Error('message')
var text = ' hala javascrip';
try{
	if (text != 'hello java') {
		throw new Error ('sai chinh ta');
	}
}catch (e){
	console.log(e.message);

}finally{
	console.log ('end');
}

//function thông báo lỗi
function UserError(){
     
    this.classT1807 = function(){
        throw new Error('la hoc sinh lop T1807E');
    };
    return this;
}
var MSSV = 'TH';
var Teacher = ' Nguyen Van A';
try{
	if (MSSV !== 'TH' && Teacher !== 'Nguyen Van A') {
		var UserError = new UserError();
		UserError.classT1807();
	}
}catch(e){
	console.log(e.message);
}
