var student = {
	name: " Nguyen A",
	MSSV: "TH1101",
	CLass: " TH1807",
	showDetail: function ( callbackFunction){
		callbackFunction();
	},
	render: function(){
		this.showDetail(function(){
			console.log(this),
			console.log(this.name),
			console.log(this.MSSV)
		}.bind(this));
	}
};
student.render();

//
var student = {
	showDetail: function(callbackFunction){
		callbackFunction();
	},
	render : function(){
		this.showDetail(function(args){
			console.log(this);
		}.bind(["Nguyen B", "A1020"]));
	}
};
student.render();