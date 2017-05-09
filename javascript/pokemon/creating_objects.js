function vehicleConstructor(name,number_of_wheels,number_of_passengers){
	vehicle = {};
	vehicle.name = name;
	vehicle.number_of_wheels = number_of_wheels;
	vehicle.number_of_passengers = number_of_passengers;

	vehicle.makeNoise = function () {
		alert('make my day!');
	}
	return vehicle;
}

function bikeConstructor(name,number_of_wheels,number_of_passengers){
	bike = {};
	bike.name = name;
	bike.number_of_wheels = number_of_wheels;
	bike.number_of_passengers = number_of_passenges;
	bike.makeNoise = function () {
		alert('ring ring!');
	}
	return bike;
}

function sedanConstructor(name,number_of_wheels,number_of_passengers){
	sedan = {};
	sedan.name = name;
	sedan.number_of_wheels = number_of_wheels;
	sedan.number_of_passengers = number_of_passenges;
	sedan.makeNoise = function () {
		alert('honk honk!');
	}
	return sedan;
}

function busConstructor(name,number_of_wheels,number_of_passengers){
	bus = {};
	bus.name = name;
	bus.number_of_wheels = number_of_wheels;
	bus.number_of_passengers = number_of_passengers;
	bus.makeNoise = function () {
		alert('make my day!');
	}
	bus.pick_up_passenger = function(number_of_pickup_passengers) {
		this.number_of_passengers = this.number_of_passengers + number_of_pickup_passengers;
	} 
	return bus;
}