function upload() {
	var imgcanvas = document.getElementById("can");
	var fileInput = document.getElementById("finput");
	var fileName = fileInput.value;
	alert("You Chose: " + fileName);
	var image = new SimpleImage(fileInput);
	image.drawTo(imgcanvas);
}
