function finalSum(x,y) {
	var sum = 0;
	for (var i=x;i<=y;i++){
		sum += i;
	}
	console.log(sum);
}

function findMin(array) {
	if (array.length == 0) {
		return null;
	}

	else if (array.length == 1) {
		return array[0];
	}
	else {
		var min = array[0];
		for (var i = 1;i<array.length;i++){
			if(min > array[i]){
				min = array[i];
			}
		}
	}
	return min;
}

function findAvg(array) {
	if (array.length == 0) {
		return null;
	}

	else if (array.length == 1) {
		return array[0];
	}
	else {
		var sum = array[0];
		for (var i = 1;i<array.length;i++){
			sum = array[i];
		}
		return sum/array.length;
	}
}

console.log(findMin([1,2,3]))
console.log(findAvg([1,2,3]))

var finalSum = function(x,y) {
	var sum = 0;
	for (var i=x;i<=y;i++){
		sum += i;
	}
	console.log(sum);
}

finalSum(1,5)

var findMin = function(array) {
	if (array.length == 0) {
		return null;
	}

	else if (array.length == 1) {
		return array[0];
	}
	else {
		var min = array[0];
		for (var i = 1;i<array.length;i++){
			if(min > array[i]){
				min = array[i];
			}
		}
	}
	return min;
}

var findAvg = function(array) {
	if (array.length == 0) {
		return null;
	}

	else if (array.length == 1) {
		return array[0];
	}
	else {
		var sum = array[0];
		for (var i = 1;i<array.length;i++){
			sum = array[i];
		}
		return sum/array.length;
	}
}

console.log(findAvg([1,2,5]))



function fundamentals(x,y,array) {

	this.sum = function (x,y) {
		var sum = 0;
		for (var i=x;i<=y;i++){
			sum += i;
		}
		console.log(sum);		
	}

	this.min = function (array) {
		if (array.length == 0) {
			return null;
		}

		else if (array.length == 1) {
			return array[0];
		}
		
		else {
			var min = array[0];
			for (var i = 1;i<array.length;i++){
				if(min > array[i]){
					min = array[i];
				}
			}
		}
		return min;
	}

	this.findAvg = function(array) {
	if (array.length == 0) {
		return null;
	}

	else if (array.length == 1) {
		return array[0];
	}
	else {
		var sum = array[0];
		for (var i = 1;i<array.length;i++){
			sum = array[i];
		}
		return sum/array.length;
	}
}


}

