Ti.Database.install("dataBase.sqlite", "productDB");


for(var i=0, j=data.list.products.children.length; i<j; i++){
	var item = data.list.products.children[i].data;
	var productInfo = new product.Object(item);
}

var db = Ti.Database.open("productDB");
var seeData = db.execute('SELECT * FROM items');
while(seeData.isValidRow()){
	var dbData = JSON.parse(seeData.fieldByName('product'));
	var stock = dbData.checkStock();
	console.log(stock);
	seeData.next();
};
seeData.close();
db.close();
