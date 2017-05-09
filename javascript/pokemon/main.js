var game = {
	players: [],
	addPlayer: function(player) {
		this.players.push(player);
	
	}
}

var getPokemon = function() {
	
}

pokemon_card = getPokemon()
// console.log(getPokemon)

function playerConstructor(name) {
	player = {};
	player.name = name;
		player.hand = [];
	player.addCard = function(pokemon_card) {
		console.log('upper scope',this)
		var self = this;
		var randInt = (Math.floor(Math.random()*(811-1))+1);
		console.log(randInt);
		url = "http://pokeapi.co/api/v2/pokemon/"+randInt+"/";
		$.get(
			url,
			function(res){
				console.log(res);
				if(res == undefined){
					self.addCard();
				}
				self.hand.push(res);
			},
			'json'
		)
	}
	game.addPlayer(player);
	return player;
}

function Player(name){
	this.name = name
}

var x = new Player()


