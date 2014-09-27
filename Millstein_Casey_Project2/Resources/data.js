var reddit = "http://api.reddit.com/r/pics";


var success = function(){
	var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;
		for (var i=0, j=posts.length; i<j; i++){
	var pic = posts[i].data.url;
	var title = posts[i].data.title;
	var	newPost = Ti.UI.createView({
		backgroundColor: "#fff",
		bottom: 3,
		height: Ti.UI.SIZE,
		theImage: pic
	});
	var label = Ti.UI.createLabel({
		text: title,
		color: "gray",
		font: {fontSize: 14},
		top: 3,
		bottom: 3,
		left: 10,
		right: 10,
		textAlign: "left",
		height: "auto",
		theImage: pic
	});
	newPost.add(label);
	scrollView.add(newPost);
	}
};


var showPic = function(rdt){
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#EEE",
	});
	var image = Ti.UI.createImageView({
		image: rdt.source.theImage
	});
	newWindow.add(image);
	newWindow.addEventListener("click", function(){
		this.close();
	});
	newWindow.open();
};

scrollView.addEventListener("click", showPic);


var error = function(){
	alert("Oops, something went wrong!");
};


var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});


client.open("GET", reddit);

client.send();