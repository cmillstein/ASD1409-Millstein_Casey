var ui = require("ui");

Ti.Database.install("database/iphone.sqlite", "iphoneInfo");

//CREATE
var create = function(name, desc){
	var db = Ti.Database.open("iphoneInfo");
	db.execute("INSERT INTO iphone (name, desc) VALUES(?,?)", name, desc);
	var rowID = db.lastInsertRowId;
	tableData = [];
	ui.tabGroup.setActiveTab(ui.tab1);
};
exports.create = create;

//READ
var tblData = [];
var read = function(){
	var db = Ti.Database.open("iphoneInfo");
	var dbRows = db.execute("SELECT id, name, desc FROM iphone");
	while (dbRows.isValidRow()){
		tblData.push({
			id: dbRows.fieldByName("id"),
			name: dbRows.fieldByName("name"),
			desc: dbRows.fieldByName("desc")
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.phoneTable(tblData);
};

exports.read = read;

//UPDATE




//DELETE



