 













var ui = require('ui');


ui.submit.addEventListener("click", function(e){
	if (ui.submit.edit != true) {
		alert("create!");
		var newPhone = ui.addPhoneField.value;
		var newPhoneSize = ui.addPhoneSizeField.value;
		var newPhoneColor = ui.addPhoneColorField.value;
		var newPhoneCarrier = ui.addPhoneCarrierField.value;
		ui.addPhoneField.value = "";
		ui.addPhoneSizeField.value = "";
		ui.addPhoneField.addPhoneColorField = "";
		ui.addPhoneCarrierField.value = "";
		ui.addPhoneField.blur();
		ui.addPhoneSizeField.blur();
		ui.addPhoneColorField.blur();
		ui.addPhoneCarrierField.blur();
		data.create(newPhone, newPhoneSize, newPhoneColor, newPhoneCarrier);
		data.read();
	} else{
		ui.tableData.removeAllChildren();
		data.update(ui.submit.index, ui.submit.location);
	}
});



ui.tableData.addEventListener("click", function(e){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
	});
});





