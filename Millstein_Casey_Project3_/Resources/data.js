var ui = require("ui");


Ti.Database.install("database/iphoneThree.sqlite", "iphoneInfo");

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
var update = function(index, location){
	var db = Ti.Database.open("iphoneInfo");
	db.execute('UPDATE iphone SET name=?, desc=? WHERE id=?', ui.addPhone.value, ui.addPhoneDesc.value, ui.button.id);
	db.close();
	tblData = [];
	read();
	ui.tabGroup.setActiveTab(ui.tab1);
	ui.button.id = null;
	ui.button.edit = false;
	ui.button.title = "Add Phone";
	ui.addPhone.value = "";
	ui.addPhoneDesc.value = "";
	win2.title = "Add Phone";
	ui.tab2.title = "Add";
};
exports.update = update;


//DELETE
var del = function(id){
	var db = Ti.Database.open("iphoneInfo");
	db.execute("DELETE FROM iphone WHERE id=?", id);
	db.close();
	tblData = [];
	read();
};
exports.del = del;



