

var ui = require("ui");
var data = require("data");
data.read();

ui.button.addEventListener("click", function (e){
	if (ui.button.edit != true) {
		alert("New Phone Created!");
		var newName = ui.addPhone.value;
		var newDesc = ui.addPhoneDesc.value;
		ui.addPhone.value = "";
		ui.addPhoneDesc.value = "";
		ui.addPhone.blur();
		ui.addPhoneDesc.blur();
		data.create(newName, newDesc);
		data.read();
	} else {
		ui.tableData.removeAllChildren();
		data.update(ui.button.index, ui.button.location);
	}
});

var win2 = Titanium.UI.createWindow({  
    title:'Add Phones',
    backgroundColor:'#EEE'
});

ui.tableData.addEventListener("click", function (e){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
		buttonNames: ["Update", "Delete", "Cancel"],
		message: "Edit Phone",
		title: "Edit Phone"
	});
	dialog.addEventListener("click", function(evt){
		if (evt.index === 0) {
			//alert(e);
			for (i in e.row.children){
				var views = e.row.children[i];
				ui.addPhone.value = views.children[0].text;
				ui.addPhoneDesc.value = views.children[1].text;
			}
			ui.button.title = "Update Phone";
			ui.button.id = e.row.id;
			ui.button.edit = true;
			ui.button.index = e.index;
			win2.title = "Update Phone";
			ui.tab2.title = "Update";
			ui.tabGroup.setActiveTab(ui.tab2);
		}
		if (evt.index === 1) {
			var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Delete Phone?",
				title: "Delete Phone"
			});
			confirmDelete.addEventListener("click", function(evt2){
				if (evt2.index === 0){
					ui.button.id = e.row.id;
					data.del(ui.button.id);
				}
			});
			confirmDelete.show();
		}
	});
	dialog.show();
});
