Ti.UI.backgroundColor = 'white';


var tabGroup = Titanium.UI.createTabGroup();



var win1 = Ti.UI.createWindow({
	title: "Phones"
});


var table = Ti.UI.createTableView({

});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Phones',
    window:win1
});

var tableData = Ti.UI.createTableView({
	backgroundColor: "#fff",
	height: Ti.UI.FILL
});

var phoneTable = function(phoneData){
	
	var dataTable = [];
	for (i in phoneData) {
		var tableRows = Ti.UI.createTableViewRow({
			id: phoneData[i].id,
			width: Ti.UI.FILL,
			height: "50dp",
		});
		var tableView = Ti.UI.createView({
		layout: "vertical",
		left: "15dp",
		top: "5dp",
		height: Ti.UI.FILL,
		width: Ti.UI.FILL	
	});
		var phoneLabel = Ti.UI.createLabel({
		text: phoneData[i].name,
		width: Ti.UI.FILL,
		font: {fontSize: "18dp", fontFamily: "Helvetica", fontColor: "#f00"}	
		});
		var descriptionLabel = Ti.UI.createLabel({
			text: phoneData[i].desc,
			width: Ti.UI.FILL,
			font: {fontSize: "14dp", fontFamily: "Helvetica", fontColor: "#ccc"}	
		});
 
 

	tableView.add(phoneLabel);
	tableView.add(descriptionLabel);
	tableRows.add(tableView);
	dataTable.push(tableRows);

}
	tableData.setData(dataTable);

};


exports.tableData = tableData;
exports.phoneTable = phoneTable;

var win2 = Titanium.UI.createWindow({  
    title:'Add Phones',
    backgroundColor:'#EEE'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Add Phones',
    window:win2
});

var addPhone = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	hintText: "Add Phone",
	width: 250,
	height: 60,
	top: 35
});

var addPhoneSize = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	hintText: "Add Phone Size",
	width: 250,
	height: 60,
	top: 115
});

var addPhoneColor = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	hintText: "Add Phone Color",
	width: 250,
	height: 60,
	top: 195
});

var addPhoneCarrier = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	hintText: "Add Phone Carrier",
	width: 250,
	height: 60,
	top: 275
});

var submit = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#2d226f",
	text: "submit",
	color: "#fff",
	textAlign: "center",
	left: 15,
	right: 15,
	top: 365,
	height: 45,
	font: {fontSize: 18, fontWeight: "bold"}
});

exports.addPhone = addPhone;
exports.addPhoneSize = addPhoneSize;
exports.addPhoneColor = addPhoneColor;
exports.addPhoneCarrier = addPhoneCarrier;
exports.submit = submit;


win2.add(addPhone, addPhoneSize, addPhoneColor, addPhoneCarrier, submit);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.open();

exports.tab1 = tab1;
exports.tab2 = tab2;
exports.tabGroup = tabGroup;



win1.add(table);
win1.open();

