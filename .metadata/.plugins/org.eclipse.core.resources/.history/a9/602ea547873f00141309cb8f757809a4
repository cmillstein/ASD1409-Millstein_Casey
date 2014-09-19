var ui = require("ui");

Ti.Database.install("database/iphoneDatabse.sqlite", "iphoneInfo");

//CREATE
var createData = function(iphoneName, iphoneSize, iphoneColor, iphoneCarrier){
	var db = Ti.Database.open("iphoneInfo");
	db.execute('INSERT INTO iphones (iphoneName, iphoneSize, iphoneColor, iphoneCarrier ) VALUES (?,?,?,?)', iphoneName, iphoneSize, iphoneColor, iphoneCarrier );
	var rowID = db.lastInsertRowId;
	//tblData = [];
	app.tabGroup.setActiveTab(app.tab1);
};
exports.create = create;


//READ
var db = Ti.Database.open("iphoneInfo");
	var dbRows = db.execute("SELECT id, iphoneName, iphoneSize, iphoneColor, iphoneCarrier FROM iphoneDatabase");
	while (dbRows.isValidRow()){
		tableData.push({
			id: dbRows.fieldByName("id"),
			name: dbRows.fieldByName("iphoneName"),
			size: dbRows.fieldByName("iphoneSize"),
			color: dbRows.fieldByName("iphoneColor"),
			carrier: dbRows.fieldByName("iphoneCarrier"),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.phoneTable(tableData);




//UPDATE




//DELETE




