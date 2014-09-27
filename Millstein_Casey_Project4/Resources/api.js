Ti.Database.install("dataBase.sqlite", "productDB");


//for(var i=0, j=data.reddit.children.length; i<j; i++){
//	var item = data.reddit.children[i].data;
//	var productInfo = new product.Object(item);
//}

var db = Ti.Database.open("productDB");
var seeData = db.execute('SELECT * FROM items');
while(seeData.isValidRow()){
	var dbData = JSON.parse(seeData.fieldByName('product'));
	seeData.next();
};
seeData.close();
db.close();