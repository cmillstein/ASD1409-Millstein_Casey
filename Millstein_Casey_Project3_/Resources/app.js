








var ui = require("ui");
var data = require("data");
data.read();

ui.button.addEventListener("click", function (e){
	if (ui.button.edit != true) {
		alert("create!");
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
