var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#66d9ef",
	title: "Starbucks Drinks"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '100%',
  width: '100%'
});


var loadFile = require("data");


//Labels

var caramelFrap = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Caramel Frappuccino",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 20,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

caramelFrap.addEventListener("click", function(){
	alert("The price of this drink is " + caramel.price + "\nThe sizes come in " + caramel.sizes);
});

loadFile.crm();


var chocolateChip = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Chocolate Chip Frappuccino",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 80,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

chocolateChip.addEventListener("click",function(){
	alert("The main ingredients of this drink are " + chocChip.ingredients);
});

var pumpkinSpice = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Pumpkin Spice Frappuccino",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 140,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

pumpkinSpice.addEventListener("click", function(){
	alert(pumpkin.ingredients + pumpkin.topping);
});

var javaChip = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Java Chip Frappuccino",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 200,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

javaChip.addEventListener("click", function(){
	alert(java.chips + java.syrup);
});

var vanillaBean = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Vanilla Bean Frappuccino",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 260,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

vanillaBean.addEventListener("click", function(){
	alert(vanilla.cost + vanilla.size);
});

var coffee = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Coffee",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 320,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

coffee.addEventListener("click", function(){
		alert("Comes" + coffeeMore.extra + "\nAlso comes in a " + coffeeMore.roast);
	});




var hotChocolate = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Hot Chocolate",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 380,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

hotChocolate.addEventListener("click", function(){
	alert(hotCoco.heat + hotCoco.flavor);
});


var latte = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Latte",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 440,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

latte.addEventListener("click", function(){
	alert(latteMore.kinds + latteMore.price);
});

var macchiato = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Macchiato",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 500,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

macchiato.addEventListener("click", function(){
	alert(macchiatoMore.flavor);
});


var icedTea = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#EEE",
	text: "Iced Tea",
	color: "#000",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 560,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

icedTea.addEventListener("click", function(){
	alert(tea.options + tea.syrups);
});


 
 


 


scrollView.add(caramelFrap, chocolateChip, pumpkinSpice, javaChip, vanillaBean, coffee, hotChocolate, latte, macchiato, icedTea);
mainWindow.add(scrollView);
navWindow.open();
