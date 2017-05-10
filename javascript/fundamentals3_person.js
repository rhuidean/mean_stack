function personConstructor(name) {
	this.name = name;
	this.distance_traveled = 0;

	this.say_name = function() {
		console.log(this.name);
	}

	this.say_something = function(parameter) {
		console.log(this.name,"says",parameter);
	}
	
	this.walk = function() {
		console.log(this.name, "is walking");
		this.distance_traveled += 3;
	}

	this.run = function() {
		console.log(this.name, "is running");
		this.distance_traveled += 10;
	}

	this.crawl = function() {
		console.log(this.name, "is crawling");
		this.distance_traveled += 1;
	}

}

person1 = new Person("Jason")
person1.say_name()
person1.say_something("Hello MD!")

