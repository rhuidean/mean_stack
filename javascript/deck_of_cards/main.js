function Deck() {
	var self = this;
	this.deck = [];
	

	var suits = ["Hearts","Diamonds","Spades","Clubs"];
	var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

	function Card(suit,number) {
		this.suit = suit;
		this.number = number;
	}

	for (var j=0;j<suits.length;j++) {
		for (var i=0;i<numbers.length;i++) {
			self.deck.push(new Card(suits[j],numbers[i]));
		}
	} 

}

Deck.prototype.shuffle = function() {
	var m =  this.deck.length, t, i;

	while(m) {
		i = Math.floor(Math.random()*m--);
		t = this.deck[m];
		this.deck[m] = this.deck[i];
		this.deck[i] = t;
	}

	return this.deck;
}
	
Deck.prototype.deal = function(player) {
	var card = this.deck[this.deck.length - 1];
	this.deck.pop();
	player.hand.push(card);
	player.updateScore();
};


function Player(name) {
	var self = this;
	this.name = name;
	this.hand = [];
	this.score = 0;

	var scoreStatus = function() {
		console.log('self.hand:', self.hand)
		for (var i = 0; i < self.hand.length; i++) {
			var card = self.hand[i];
			console.log(typeof(card.number));
			self.score +=card.number;
		}
	}
	this.updateScore = function() {
		scoreStatus();
		if(self.score >21){
		 console.log(self.name,"You loose!!!") 	
		}
	}

}

Player.prototype.discard = function(card) {
	this.hand.splice(card,1);
}

var deck1 = new Deck()
var Jason = new Player('Jason')
deck1.deal(Jason)


function Game() {
	this.players = [];
}


Game.prototype.addPlayer = function(player) {
	this.players.push(player);
}

Game.prototype.call = function() {
	var players_score = [];
	var self = this;
	for (var i=0; i<this.players.length;i++) {
		console.log('this:', this)
		if (this.players.length == 0) {
			console.log("No players in the game")
		}

		if (this.players[i].score <=21){
			players_score.push(this.players[i].number);
		}
	}

	players_score.sort();
	var winner = players_score.pop();
	
	return winner;
}


