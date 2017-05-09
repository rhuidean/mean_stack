/*Problem 1: Let's multiply everything in an array by 5
*/

var myarr =[1,5,25,125,42]

for (var element in myarr) {
	console.log(5*myarr[element]) 
}

var myobject = {
	language: "Javascript",
	dojo: "Washington DC"
}

Object.keys(myobject).forEach(function(key,value) {
	console.log(key,value,myobject[key]);
})

for (var key in myobject) {
	console.log(key,myobject[key])
}