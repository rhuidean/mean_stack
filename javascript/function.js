function runningLogger() {
	console.log("I am running!");
}

function callable(parameter) {
	return value*10;
}

function stringReturnOne() {
	return "Hello World."
}

function stringReturnTwo() {
	return "Happy Day."
}

function caller(parameter) {
	if (typeof parameter == "function") {
		var x = parameter();
		console.log(x)
	}
	return 1;
}

console.log(stringReturnTwo)
console.log(caller(stringReturnTwo))
console.log('test')


function myDoubleConsoleLog(parameter1,parameter2) {
	if (typeof parameter1 == "function" && typeof parameter2 == "function") {
	console.log(parameter1());
	console.log(parameter2());
	}
}

myDoubleConsoleLog(stringReturnOne,stringReturnTwo);

function callOne() {
	console.log("ending?");
}

function callTwo() {
	return "interesting";
}


function caller2(parameter) {
	console.log(parameter)
	console.log(typeof parameter)
	console.log("starting");
	if (typeof parameter == "function"){
		console.log('settimeout')
		setTimeout(parameter(callOne, callTwo),2000);
		}
}
// console.log(type)
// caller2(myDoubleConsoleLog(callOne,callTwo));
caller2(myDoubleConsoleLog)
// caller2(function(){console.log('test')})
