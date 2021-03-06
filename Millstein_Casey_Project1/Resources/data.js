//Literal Notation

var caramel = {
	price: "5 dollars",
	sizes: function(){
		alert("Comes in Small, Medium and Large");
	}
};

var chocChip = {
	price: "5 dollars",
	ingredients: function(){
		alert("The main ingredients of this drink are Milk, Chocolate Chips, Ice, Chocolate Syrup");
	} 
};


var pumpkin = {
	ingredients: "Instead of regular milk, this drink comes with soy milk.",
	topping: function(){
		alert(" You can get whipped cream, or no whipped cream");
	}
};


var java = {
	chips: "You can get either java chips, or regular chocolate chips. ",
	syrup: function() {
		alert("This drink comes with a chocolate syrup drizzle!");
	} 
};

var vanilla = {
	cost: function(){
	alert("The cost of this drink is $4.50 ");
},
	size: "It comes in small, medium, and large"	
};

//Dot Notation

var coffeeMore = new Object();
	coffeeMore.roast = " blonde, medium or dark roast ";
	coffeeMore.extra = " with or without cream and sugar";
	coffeeMore.method = function(){
		alert(this.roast + this.extra);
};


var hotCoco = new Object();
	hotCoco.heat = " Comes as a kids temperature, or regular temperature.";
	hotCoco.flavor = " You can also add peppermint flavor!";
	hotCoco.method = function(){
		alert(this.heat + this.flavor);
	};
	
var latteMore = new Object();
	latteMore.kinds = "You can choose either an iced or hot latte.";
	latteMore.price = " Prices depened on the kind you choose";
	latteMore.method = function(){
		alert(this.kinds + this.price);
	};
	
var macchiatoMore = new Object();
	macchiatoMore.flavor = " You can choose from a caramel macchiato or a vanilla macchiato.";
	macchiatoMore.method = function(){
		alert(this.flavor);
	};

var tea = new Object();
	tea.options = " You can choose from passion tea, green tea, or black tea.";
	tea.syrups = " You can also add peach, blackberry, and mint flavors";
	tea.method = function(){
		alert(this.options + this.syrups);
};


exports.crm = caramel;
exports.choc = chocChip;
exports.pmk = pumpkin;
exports.jva = java;
exports.vnl = vanilla;
exports.cfm = coffeeMore;
exports.coco = hotCoco;
exports.ltm = latteMore;
exports.mcm = macchiatoMore;
exports.ice = tea;