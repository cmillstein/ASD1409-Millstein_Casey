Ti.Database.install("dataBase.sqlite", "productDB");

var data = require("data");

//for(var i=0, j=data.posts.children.length; i<j; i++){
//var item = data.posts.children[i].data;
//var productInfo = new product.Object(item);
//}

var db = Ti.Database.open("productDB");
var seeData = db.execute('SELECT * FROM items');
while(seeData.isValidRow()){
	var dbData = JSON.parse(seeData.fieldByName('product'));
	seeData.next();
};
seeData.close();
db.close();