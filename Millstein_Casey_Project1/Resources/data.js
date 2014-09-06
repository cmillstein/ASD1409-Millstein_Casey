//Literal Notation

var caramel = {
	price: "5 dollars",
	sizes: "Small, Medium, Large"
};

var chocChip = {
	price: "5 dollars",
	ingredients: "Milk, Chocolate Chips, Ice, Chocolate Syrup"	
};


var pumpkin = {
	ingredients: "Instead of regular milk, this drink comes with soy milk.",
	topping: " Also, you can get whipped cream, or no whipped cream"
};


var java = {
	chips: "You can get either java chips, or regular chocolate chips. ",
	syrup: "It also comes with a chocolate syrup drizzle!"
};

var vanilla = {
	cost: "The cost of this drink is $4.50 ",
	size: "It comes in small, medium, and large"	
};

//Dot Notation

var coffeeMore = new Object();
	coffeeMore.roast = " blonde, medium or dark roast ";
	coffeeMore.extra = " with or without cream and sugar";
	
	
var hotCoco = new Object();
	hotCoco.heat = " Comes as a kids temperature, or regular temperature.";
	hotCoco.flavor = " You can also add peppermint flavor!";
	
var latteMore = new Object();
	latteMore.kinds = "You can choose either an iced or hot latte.";
	latteMore.price = " Prices depened on the kind you choose";
	
	
var macchiatoMore = new Object();
	macchiatoMore.flavor = " You can choose from a caramel macchiato or a vanilla macchiato.";
	

var tea = new Object();
	tea.options = " You can choose from passion tea, green tea, or black tea.";
	tea.syrups = " You can also add peach, blackberry, and mint flavors";
	
	


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